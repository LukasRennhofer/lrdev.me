import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  {
    category: "Graphics & 3D",
    description: "Low-level graphics programming and 3D rendering",
    items: [
      { name: "WebGL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/webgl/webgl-original.svg" },
      { name: "Three.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/threejs/threejs-original.svg" },
      { name: "OpenGL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/opengl/opengl-original.svg" },
      { name: "Vulkan", icon: "https://upload.wikimedia.org/wikipedia/commons/3/30/Vulkan.svg" },
      { name: "DirectX", icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/DirectX_logo.svg" },
      { name: "GLSL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/opengl/opengl-original.svg" }
    ],
    gradient: "from-purple-500 via-pink-500 to-red-500",
    bgGradient: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
    borderColor: "border-purple-200 dark:border-purple-700"
  },
  {
    category: "Frontend Development",
    description: "Modern web frameworks and libraries",
    items: [
      { name: "React", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
      { name: "TypeScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
      { name: "Next.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" },
      { name: "Svelte", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/svelte/svelte-original.svg" },
      { name: "Astro", icon: "https://astro.build/assets/press/astro-icon-light-gradient.svg" },
      { name: "Tailwind CSS", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg" }
    ],
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
    borderColor: "border-blue-200 dark:border-blue-700"
  },
  {
    category: "Backend & Systems",
    description: "Server-side technologies and infrastructure",
    items: [
      { name: "Node.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
      { name: "Python", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
      { name: "Rust", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/rust/rust-plain.svg" },
      { name: "Docker", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" },
      { name: "AWS", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "PostgreSQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" }
    ],
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    bgGradient: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
    borderColor: "border-green-200 dark:border-green-700"
  },
  {
    category: "Creative Tools",
    description: "Design and content creation software",
    items: [
      { name: "Blender", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/blender/blender-original.svg" },
      { name: "Figma", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg" },
      { name: "Photoshop", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg" },
      { name: "Unity", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/unity/unity-original.svg" },
      { name: "Unreal Engine", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/unrealengine/unrealengine-original.svg" },
      { name: "After Effects", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/aftereffects/aftereffects-original.svg" }
    ],
    gradient: "from-orange-500 via-red-500 to-pink-500",
    bgGradient: "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
    borderColor: "border-orange-200 dark:border-orange-700"
  }
];

const focusAreas = [
  {
    icon: "🚀",
    title: "Open Source",
    description: "Contributing to open source projects and building tools that help other developers",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: "🎯",
    title: "Skill-Focused",
    description: "Constantly learning and mastering new technologies to stay at the cutting edge",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: "🤝",
    title: "Community",
    description: "Sharing knowledge through technical writing and mentoring fellow developers",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: "⚡",
    title: "Performance",
    description: "Optimizing applications for speed, efficiency, and exceptional user experiences",
    gradient: "from-orange-500 to-red-500"
  }
];

const TechIcon = ({ tech, index, categoryIndex }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ 
      duration: 0.5, 
      delay: (categoryIndex * 0.1) + (index * 0.05),
      type: "spring",
      stiffness: 100
    }}
    viewport={{ once: true }}
    whileHover={{ 
      scale: 1.1, 
      y: -5,
      transition: { duration: 0.2 }
    }}
    className="group relative"
  >
    <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600">
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/20 to-secondary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
      
      <div className="relative flex flex-col items-center space-y-3">
        <div className="w-12 h-12 flex items-center justify-center">
          <img 
            src={tech.icon} 
            alt={tech.name}
            className="w-10 h-10 object-contain filter group-hover:drop-shadow-lg transition-all duration-300"
            onError={(e) => {
              // Fallback to a generic icon if the image fails to load
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg items-center justify-center text-white font-bold text-sm hidden">
            {tech.name.charAt(0)}
          </div>
        </div>
        
        <span className="text-sm font-medium text-gray-900 dark:text-gray-100 text-center leading-tight">
          {tech.name}
        </span>
      </div>
      
      {/* Tooltip */}
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
        {tech.name}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-700"></div>
      </div>
    </div>
  </motion.div>
);

export default function Skills() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
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
              🛠️ Technology Stack
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Tools and technologies I use to bring ideas to life, from low-level graphics programming to modern web development
          </p>
        </motion.div>

        <div className="space-y-16">
          {skills.map((skillSet, categoryIndex) => (
            <motion.div
              key={skillSet.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Category Header */}
              <div className="text-center mb-12">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-gradient-to-r ${skillSet.gradient} shadow-lg mb-6`}>
                  <div className="w-8 h-8 bg-white/20 rounded-xl backdrop-blur-sm flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-sm" />
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                  {skillSet.category}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  {skillSet.description}
                </p>
              </div>
              
              {/* Technologies Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
                {skillSet.items.map((tech, index) => (
                  <TechIcon 
                    key={tech.name} 
                    tech={tech} 
                    index={index} 
                    categoryIndex={categoryIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Focus Areas Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              What Drives Me
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My core values and focus areas that shape how I approach development and collaboration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {focusAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${area.gradient} text-white text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {area.icon}
                </div>
                
                <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  {area.title}
                </h4>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-3xl p-8 border border-primary-200 dark:border-primary-700 max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Let's Build Something Amazing
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Whether it's contributing to open source, sharing knowledge, or tackling challenging technical problems, I'm always excited to collaborate with fellow developers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Get in Touch
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="/blog" className="btn-secondary">
                Read My Articles
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}