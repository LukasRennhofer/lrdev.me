import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectOverview() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
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
              Personal Projects
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Vantor Engine</span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Vantor is a data-oriented, modular game engine built for real-time rendering, 2D/3D simulations, and procedural generation for open world games. Designed for creators who value flexibility and low-level access.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "🔧 Modular Architecture",
                desc: "Plug-and-play systems: physics, input, rendering, audio — all decoupled and customizable."
              },
              {
                title: "🚀 Experimental Rendering",
                desc: "Built on top of multiple APIs to support rendering on consoles."
              },
              {
                title: "📦 Built-In Tooling",
                desc: "Includes an integrated CLI for managing projects and cross-building the engine."
              },
              {
                title: "🎮 Custom Media Layer",
                desc: "An abstracted pipeline for supporting audio, input, ... on multiple devices."
              },
              {
                title: "🧠 Data-Oriented",
                desc: "Vantor is data oriented and can be controlled with json, xml and binary formats."
              },
              {
                title: "🖼️ Procedural landscapes",
                desc: "The Engine is designed to create beautiful generated terrain based on No Mans Skys algorythms."
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
         <br></br>
         {/* Bottom CTA Section */}
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
                         Take a look ✨
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
