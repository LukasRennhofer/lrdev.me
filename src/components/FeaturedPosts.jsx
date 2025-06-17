import React from 'react';
import { motion } from 'framer-motion';


const PostCard = ({ post, index, featured = false }) => {
  const tags = Array.isArray(post.data.tags) ? post.data.tags : [];
  const readingTime = post.data.readingTime || 'N/A';

  const heroLight = post.data.heroLight || '';
  const heroDark = post.data.heroDark || '';

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: featured ? 1.03 : 1.05, y: -6 }}
      className={`relative group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md dark:shadow-gray-900/60 border border-gray-200 dark:border-gray-700
        ${featured ? 'lg:col-span-2' : ''}`}
      style={{ minHeight: featured ? '420px' : '320px' }}
    >

{(heroLight || heroDark) && (
  <div
    className={`relative overflow-hidden rounded-t-2xl ${featured ? 'aspect-[16/8]' : 'aspect-[16/9]'}`}
  >
    {/* Light Image */}
    {heroLight && (
      <img
        src={post.data.heroLight.src}
        alt={(post.data.title || post.title) + " (light)"}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 block dark:hidden"
        loading="lazy"
      />
    )}

    {/* Dark Image */}
    {heroDark && (
      <img
        src={post.data.heroDark.src}
        alt={(post.data.title || post.title) + " (dark)"}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 hidden dark:block"
        loading="lazy"
      />
    )}

    {/* Gradient overlay and other stuff remains the same */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 dark:from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300" />

    {featured && (
      <div className="absolute top-4 right-4">
        <span className="px-3 py-1 bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-xs font-semibold rounded-full shadow-lg select-none">
          ⭐ Featured
        </span>
      </div>
    )}

    <div className="absolute bottom-4 right-4 transition-opacity duration-300 opacity-100">
      <span className="px-3 py-1 bg-black/70 backdrop-blur-sm text-white text-xs rounded-full select-none">
        {readingTime}
      </span>
    </div>
  </div>
)}


      {/* ✅ Text Content */}
      <div className={`p-5 ${featured ? 'lg:p-7' : ''} flex flex-col justify-between`}>
        <div>
          <time className="block text-xs text-gray-500 dark:text-gray-400 font-medium mb-1">
            {new Date(post.data.pubDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </time>

          <h3
            className={`font-semibold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors leading-snug
              ${featured ? 'text-xl lg:text-2xl' : 'text-lg'}`}
          >
            {post.data.title}
          </h3>

          <p className={`text-gray-600 dark:text-gray-300 mb-4 leading-relaxed ${featured ? 'text-base' : 'text-sm'}`}>
            {post.data.description}
          </p>
        </div>

        {/* ✅ Tags */}
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.length > 0 &&
              tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/50 hover:text-primary-700 dark:hover:text-primary-300 transition-colors cursor-pointer select-none"
                >
                  #{tag}
                </span>
              ))}
          </div>

          <a
            href={`/blog/${post.id}`}
            className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300 transition-colors group/link select-none"
          >
            Read Article
            <svg
              className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </motion.article>
  );
};



export default function FeaturedPosts({ posts }) {
  if (!posts || posts.length === 0) return null;

  const mainFeatured = posts[0];
  const otherFeatured = posts.slice(1);

  return (
     <section className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-20"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mb-6"
                >
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/50 dark:to-secondary-900/50 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium border border-primary-200 dark:border-primary-700">
                  🌠 Blog Posts 
                  </span>
                </motion.div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="gradient-text">Featured Posts</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                 My most famous and interesting posts about software topics I've written
                </p>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {mainFeatured && <PostCard post={mainFeatured} index={0} featured={true} />}
        {otherFeatured.map((post, i) => (
          <PostCard key={post.slug} post={post} index={i + 1} />
        ))}

      </div>
    </section>
  );
}
