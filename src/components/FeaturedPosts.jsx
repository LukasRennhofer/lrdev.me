import React from 'react';
import { motion } from 'framer-motion';

// Sample blog posts - replace with actual data
const featuredPosts = [
  {
    title: "Building Modern WebGL Applications with Three.js",
    excerpt: "Explore advanced techniques for creating performant 3D web experiences using Three.js and modern WebGL features.",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["WebGL", "Three.js", "Graphics"],
    slug: "webgl-threejs-modern-apps",
    image: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
    category: "Graphics Programming"
  },
  {
    title: "The Future of Web Graphics: WebGPU Deep Dive",
    excerpt: "A comprehensive look at WebGPU and how it's revolutionizing graphics programming on the web.",
    date: "2024-01-10",
    readTime: "12 min read",
    tags: ["WebGPU", "Graphics", "Performance"],
    slug: "webgpu-future-web-graphics",
    image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Graphics Programming"
  },
  {
    title: "Optimizing React Performance with Advanced Patterns",
    excerpt: "Learn cutting-edge React optimization techniques to build lightning-fast web applications.",
    date: "2024-01-05",
    readTime: "10 min read",
    tags: ["React", "Performance", "JavaScript"],
    slug: "react-performance-optimization",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Web Development"
  }
];

const PostCard = ({ post, index, featured = false }) => (
  <motion.article
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: index * 0.1 }}
  viewport={{ once: true }}
  whileHover={{ scale: featured ? 1.02 : 1.03, y: -5 }}
  className={`bg-white dark:bg-gray-700 rounded-3xl overflow-hidden shadow-lg dark:shadow-gray-900/50 hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group ${
    featured ? 'lg:col-span-2' : ''
  }`}
>
  <div className={`aspect-video overflow-hidden relative ${featured ? 'lg:aspect-[2/1]' : ''}`}>
    <img
      src={post.image}
      alt={post.title}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
    />
    
    {/* Overlay gradient */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 dark:from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    
    {/* Category badge */}
    <div className="absolute top-4 left-4">
      <span className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-900 dark:text-gray-100 text-sm font-medium rounded-full border border-white/20">
        {post.category}
      </span>
    </div>
      
      {featured && (
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-sm font-medium rounded-full shadow-lg">
            ⭐ Featured
          </span>
        </div>
      )}
      
      {/* Read time overlay */}
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="px-3 py-1 bg-black/70 backdrop-blur-sm text-white text-sm rounded-full">
          {post.readTime}
        </span>
      </div>
    </div>
    
    <div className={`p-6 ${featured ? 'lg:p-8' : ''}`}>
      <div className="flex items-center justify-between mb-4">
        <time className="text-sm text-gray-500 dark:text-gray-400 font-medium">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
        <div className="flex items-center space-x-2 text-gray-400">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm">{post.readTime}</span>
        </div>
      </div>
      
      <h3 className={`font-bold mb-3 text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors leading-tight ${
        featured ? 'text-2xl lg:text-3xl' : 'text-xl'
      }`}>
        {post.title}
      </h3>
      
      <p className={`text-gray-600 dark:text-gray-300 mb-6 leading-relaxed ${
        featured ? 'text-lg' : ''
      }`}>
        {post.excerpt}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/50 hover:text-primary-700 dark:hover:text-primary-300 transition-colors cursor-pointer"
          >
            #{tag}
          </span>
        ))}
      </div>
      
      <div className="flex items-center justify-between">
        <a
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300 transition-colors group/link"
        >
          Read Article
          <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
        
        <div className="flex items-center space-x-3">
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" aria-label="Like post">
            <svg className="w-5 h-5 text-gray-400 hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" aria-label="Share post">
            <svg className="w-5 h-5 text-gray-400 hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </motion.article>
);

export default function FeaturedPosts() {
  const featuredPost = featuredPosts.find(post => post.featured);
  const regularPosts = featuredPosts.filter(post => !post.featured);

  return (
    <section className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-transparent to-secondary-50/50 dark:from-primary-950/50 dark:to-secondary-950/50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/50 dark:to-secondary-900/50 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium border border-primary-200 dark:border-primary-700">
              📝 Latest Articles
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Featured Posts</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Deep dives into graphics programming, web development, and cutting-edge technologies that shape the future of digital experiences
          </p>
        </motion.div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Featured Post */}
          {featuredPost && (
            <PostCard post={featuredPost} index={0} featured={true} />
          )}
          
          {/* Regular Posts */}
          {regularPosts.map((post, index) => (
            <PostCard key={post.slug} post={post} index={index + 1} />
          ))}
        </div>
        
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {[
            { number: "50+", label: "Technical Articles", icon: "📚" },
            { number: "10K+", label: "Monthly Readers", icon: "👥" },
            { number: "25+", label: "Topics Covered", icon: "🎯" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-3xl p-8 border border-primary-200 dark:border-primary-700 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Stay Updated with Latest Insights
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Get notified when I publish new articles about graphics programming, web development, and emerging technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/blog" className="btn-primary">
                View All Posts
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="/contact" className="btn-secondary">
                Subscribe to Updates
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}