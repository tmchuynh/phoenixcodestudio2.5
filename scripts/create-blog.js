#!/usr/bin/env node

/**
 * Script to create a new MDX blog post
 * Usage: npm run blog:new "Your Blog Post Title"
 */

const fs = require("fs");
const path = require("path");

function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function createBlogPost(title) {
  const slug = generateSlug(title);
  const date = new Date().toISOString().split("T")[0];
  const filename = `${slug}.mdx`;
  const filepath = path.join(__dirname, "../content/blogs", filename);

  // Check if file already exists
  if (fs.existsSync(filepath)) {
    console.error(`Blog post already exists: ${filename}`);
    process.exit(1);
  }

  const template = `---
title: "${title}"
author: "Your Name"
date: "${date}"
excerpt: "Add a brief description of your blog post here."
featured: false
topics: ["Topic1", "Topic2", "Topic3"]
cardImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800"
imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200"
image2Url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200"
---

# ${title}

Your blog post content starts here...

## Introduction

Add your introduction here.

## Main Content

Write your main content here. You can use:

- **Bold text**
- *Italic text*
- [Links](https://example.com)
- Code blocks
- Images
- And much more!

### Code Example

\`\`\`javascript
const example = "Hello, World!";
console.log(example);
\`\`\`

## Conclusion

Wrap up your thoughts here.
`;

  // Ensure the blogs directory exists
  const blogsDir = path.dirname(filepath);
  if (!fs.existsSync(blogsDir)) {
    fs.mkdirSync(blogsDir, { recursive: true });
  }

  // Write the file
  fs.writeFileSync(filepath, template, "utf8");

  console.log(`✅ Created new blog post: ${filename}`);
  console.log(`📁 Location: ${filepath}`);
  console.log(`🔗 URL: /blogs/${slug}`);
  console.log("");
  console.log("Next steps:");
  console.log("1. Edit the frontmatter with your details");
  console.log("2. Add your content");
  console.log("3. Update images with actual URLs");
  console.log("4. Test locally with: npm run dev");
}

// Get title from command line arguments
const title = process.argv[2];

if (!title) {
  console.error("Please provide a blog post title:");
  console.error('npm run blog:new "Your Amazing Blog Post Title"');
  process.exit(1);
}

createBlogPost(title);
