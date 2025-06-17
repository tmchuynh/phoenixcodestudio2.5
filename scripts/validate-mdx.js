#!/usr/bin/env node

const { getAllBlogs, getBlogBySlug } = require('../src/lib/mdx.ts');

async function validateMDXFiles() {
  try {
    console.log('🔍 Validating converted MDX files...\n');
    
    // Get all blogs using the MDX utility
    const blogs = getAllBlogs();
    
    console.log(`📊 Found ${blogs.length} blog posts`);
    console.log('📝 Blog validation results:\n');
    
    let validCount = 0;
    let errorCount = 0;
    
    for (const blog of blogs) {
      const status = blog ? '✅' : '❌';
      const title = blog ? blog.title : 'Unknown';
      
      if (blog) {
        validCount++;
        console.log(`${status} ${blog.slug} - "${title}"`);
        
        // Basic validation checks
        if (!blog.author) console.log(`   ⚠️  Missing author`);
        if (!blog.date) console.log(`   ⚠️  Missing date`);
        if (!blog.excerpt) console.log(`   ⚠️  Missing excerpt`);
        if (!blog.topics || blog.topics.length === 0) console.log(`   ⚠️  Missing topics`);
        if (!blog.content) console.log(`   ⚠️  Missing content`);
      } else {
        errorCount++;
        console.log(`${status} Error loading blog`);
      }
    }
    
    console.log(`\n📈 Summary:`);
    console.log(`   Valid blogs: ${validCount}`);
    console.log(`   Errors: ${errorCount}`);
    console.log(`   Success rate: ${((validCount / (validCount + errorCount)) * 100).toFixed(1)}%`);
    
    // Test featured blogs
    const featuredBlogs = blogs.filter(blog => blog.featured);
    console.log(`   Featured blogs: ${featuredBlogs.length}`);
    
    // Test topics
    const allTopics = [...new Set(blogs.flatMap(blog => blog.topics))];
    console.log(`   Unique topics: ${allTopics.length}`);
    console.log(`   Topics: ${allTopics.join(', ')}`);
    
    console.log('\n✨ MDX validation complete!');
    
  } catch (error) {
    console.error('❌ Error validating MDX files:', error);
    process.exit(1);
  }
}

validateMDXFiles();
