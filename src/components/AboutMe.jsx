import React from 'react';
import { motion } from 'framer-motion';

export default function AboutMe() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
              About Me
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Lukas Rennhofer</span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            I'm a graphics and game development enthusiast with a strong background in real-time rendering, tooling, and open-source contributions — most notably to Vantor and Blender. I love building engines, experimenting with shaders, and pushing creative boundaries.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "🎓 Education at HTL",
                desc: "Currently attending HTL Wr. Neustadt with a focus on software engineering and general IT education."
              },
              {
                title: "⚙️ Low-Level Programming",
                desc: "Deeply interested in performance-critical systems, memory management, and building custom rendering and audio layers from scratch using C/C++."
              },
              {
                title: "🎮 Game Design Philosophy",
                desc: "I explore how games feel, how mechanics create meaning, and how systems shape player experience. I'm constantly learning from classic and experimental game design."
              },
              {
                title: "🧠 Engine Architecture",
                desc: "Built multiple custom engines focused on modular design, ECS, and real-time rendering. I'm driven by understanding the internals of game technology."
              },
              {
                title: "🧑‍💻 Blender Contributions",
                desc: "I've contributed to Blender's codebase, helping improve user interface interactions and workflow enhancements for artists and developers alike."
              },
              {
                title: "🌐 Creative Coding",
                desc: "Outside of engines, I love procedural visuals, graphics demos, and using code as a creative tool — especially at the intersection of art and engineering."
              }
            ].map(({ title, desc }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">{title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-3xl p-8 border border-primary-200 dark:border-primary-700 max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://github.com/LukasRennhofer" className="btn-primary">
                  Explore my work
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
