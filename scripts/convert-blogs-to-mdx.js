#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to convert title to slug
function titleToSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim('-'); // Remove leading/trailing hyphens
}

// Function to format date
function formatDate(dateObj) {
  const { year, month, day } = dateObj;
  return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
}

// Function to convert list structure to markdown
function listToMarkdown(list, level = 2) {
  let markdown = '';
  
  for (const item of list) {
    // Add heading
    markdown += `${'#'.repeat(level)} ${item.title}\n\n`;
    
    // Add description if it exists
    if (item.description) {
      markdown += `${item.description}\n\n`;
    }
    
    // Add nested lists if they exist
    if (item.list && item.list.length > 0) {
      markdown += listToMarkdown(item.list, level + 1);
    }
  }
  
  return markdown;
}

// Function to convert a blog post to MDX
function blogToMDX(blog) {
  const slug = titleToSlug(blog.title);
  const date = formatDate(blog.date);
  
  // Create frontmatter
  const frontmatter = `---
title: "${blog.title}"
author: "${blog.author}"
date: "${date}"
excerpt: "${blog.excerpt}"
featured: ${blog.featured}
topics: ${JSON.stringify(blog.topics)}
cardImage: "${blog.cardImage}"
imageUrl: "${blog.imageUrl}"
image2Url: "${blog.image2Url}"
---

`;

  // Start building content
  let content = '';
  
  // Add introduction
  if (blog.intro && blog.intro.length > 0) {
    content += blog.intro.join('\n\n') + '\n\n';
  }
  
  // Add hero image
  content += `![Hero Image](${blog.imageUrl})\n\n`;
  
  // Convert list structure to markdown
  if (blog.list && blog.list.length > 0) {
    content += listToMarkdown(blog.list);
  }
  
  // Add second image if it exists and is different from the first
  if (blog.image2Url && blog.image2Url !== blog.imageUrl) {
    content += `![Supporting Image](${blog.image2Url})\n\n`;
  }
  
  // Add conclusions
  if (blog.conclusions && blog.conclusions.length > 0) {
    content += '## Conclusion\n\n';
    content += blog.conclusions.join('\n\n') + '\n\n';
  }
  
  return frontmatter + content;
}

// Main function to process all blogs
function convertBlogsToMDX() {
  try {
    // Import the blog posts
    const blogPostsPath = path.join(__dirname, '..', 'src', 'lib', 'constants', 'blog-posts.ts');
    const blogsContent = fs.readFileSync(blogPostsPath, 'utf8');
    
    // Extract the blogs array (this is a simple approach - in production you might want to use a proper TypeScript parser)
    // For now, we'll create a temporary JS file and require it
    const tempJsPath = path.join(__dirname, 'temp-blogs.js');
    const jsContent = blogsContent
      .replace('import { BlogPost } from "../interfaces/blogs";', '')
      .replace('export const blogs: BlogPost[] = ', 'module.exports = ');
    
    fs.writeFileSync(tempJsPath, jsContent);
    const blogs = require('./temp-blogs.js');
    
    // Create the blogs directory if it doesn't exist
    const blogsDir = path.join(__dirname, '..', 'content', 'blogs');
    if (!fs.existsSync(blogsDir)) {
      fs.mkdirSync(blogsDir, { recursive: true });
    }
    
    // Convert each blog to MDX
    let convertedCount = 0;
    const existingFiles = fs.readdirSync(blogsDir).filter(file => file.endsWith('.mdx'));
    
    for (const blog of blogs) {
      const slug = titleToSlug(blog.title);
      const filename = `${slug}.mdx`;
      const filepath = path.join(blogsDir, filename);
      
      // Skip if file already exists (to avoid overwriting manually created files)
      if (existingFiles.includes(filename)) {
        console.log(`Skipping ${filename} - already exists`);
        continue;
      }
      
      const mdxContent = blogToMDX(blog);
      fs.writeFileSync(filepath, mdxContent, 'utf8');
      
      convertedCount++;
      console.log(`Converted: ${filename}`);
    }
    
    // Clean up temporary file
    fs.unlinkSync(tempJsPath);
    
    console.log(`\nConversion complete! Converted ${convertedCount} blog posts to MDX files.`);
    console.log(`Total blogs in array: ${blogs.length}`);
    console.log(`Existing MDX files: ${existingFiles.length}`);
    
  } catch (error) {
    console.error('Error converting blogs to MDX:', error);
    
    // Clean up temp file if it exists
    const tempJsPath = path.join(__dirname, 'temp-blogs.js');
    if (fs.existsSync(tempJsPath)) {
      fs.unlinkSync(tempJsPath);
    }
  }
}

// Run the conversion
convertBlogsToMDX();
