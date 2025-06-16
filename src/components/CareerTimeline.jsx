import React from 'react';
import { motion } from 'framer-motion';

// Images
import VantorLogo from '../assets/VantorLogo_main_wbg.png';

const timelineItems = [
  {
    year: "September 2024",
    title: "Started at HTL Wiener Neustadt",
    description: "Began ",
    image: {VantorLogo}  
},
  {
    year: "October 2024",
    title: "The beginning of Vantor",
    description: "Dived into game design philosophy and began writing my own low-level game engine.",
    image: "../assets/VantorLogo_main_wbg.png",
  },
  {
    year: "August 2025",
    title: "Contributed to Blender",
    description: "Made contributions to Blender's Rendering Engine Cycles and workflow tools to improve artist and developer experiences.",
    image: "/images/blender.jpg",
  },
  {
    year: "2024",
    title: "Vantor Engine & Projects",
    description: "Released early versions of Vantor, a modular game engine built with data-oriented design.",
    image: "/images/vantor.jpg",
  },
];

export default function CareerTimeline() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Career Timeline</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My journey from education to game dev and open-source contributions, told step by step.
          </p>
        </motion.div>

        {/* Timeline container */}
        <div className="relative border-l-2 border-gray-300 dark:border-gray-700 ml-6">
          {timelineItems.map(({ year, title, description, image }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16 pl-8 relative"
            >
              {/* The circle marker */}
              <span className="absolute -left-5 top-2 w-4 h-4 rounded-full border-4 border-white dark:border-gray-900 bg-primary-600 dark:bg-primary-400 shadow-md" />

              {/* Content Card */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-0">
                    {title}
                  </h3>
                  <span className="text-sm text-primary-600 dark:text-primary-300 font-semibold">
                    {year}
                  </span>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mt-3 mb-4 leading-relaxed">
                  {description}
                </p>

                {image && (
                  <img
                    src={image}
                    alt={title}
                    className="rounded-lg border border-gray-300 dark:border-gray-600 shadow-sm object-cover max-h-48 w-full"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
