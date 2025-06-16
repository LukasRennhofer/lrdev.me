import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Sample gallery items with varying image heights for masonry effect
const galleryItems = [
  {
    id: 1,
    title: "Vantor Engine",
    image: "/images/vantor.jpg",
    description:
      "A modular game engine designed for data-oriented real-time rendering and procedural generation.",
  },
  {
    id: 2,
    title: "Blender Contributions",
    image: "/images/blender.jpg",
    description:
      "Improved Blender's UI and workflow tools to enhance the artist and developer experience.",
  },
  {
    id: 3,
    title: "Game Design Philosophy",
    image: "/images/game_design.jpg",
    description:
      "Crafting immersive gameplay experiences and studying game mechanics deeply.",
  },
  {
    id: 4,
    title: "Low-level Programming",
    image: "/images/low_level.jpg",
    description:
      "Specializing in C and C++ development with focus on performance and engine optimizations.",
  },
  {
    id: 5,
    title: "Procedural Terrain",
    image: "/images/terrain.jpg",
    description:
      "Creating stunning landscapes through procedural generation inspired by No Man's Sky.",
  },
  {
    id: 6,
    title: "Shader Experiments",
    image: "/images/shader.jpg",
    description: "Exploring custom shaders for realistic rendering and effects.",
  },
  {
    id: 7,
    title: "UI/UX Designs",
    image: "/images/uiux.jpg",
    description: "Designing sleek and intuitive user interfaces for game tools.",
  },
  {
    id: 8,
    title: "Open Source Projects",
    image: "/images/opensource.jpg",
    description: "Contributions and collaborations to improve community-driven software.",
  },
];

function useMasonryLayout() {
  // This hook adds a resize event listener to trigger re-render for layout recalculation
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
}

export default function GalleryShowcase() {
  const [selectedId, setSelectedId] = useState(null);
  const selectedItem = galleryItems.find((item) => item.id === selectedId);
  const galleryRef = useRef(null);
  const windowWidth = useMasonryLayout();

  // Calculate row span for masonry effect based on image height
  // Assuming grid row height = 10px + 10px gap => 20px per row approx
  // This is approximate, can be adjusted with actual CSS
  const getRowSpan = (img) => {
    if (!img) return 10;
    const height = img.naturalHeight;
    return Math.ceil(height / 20);
  };

  // Store spans in state after image loads for smoother masonry
  const [spans, setSpans] = useState({});

  useEffect(() => {
    const imgElements = galleryRef.current.querySelectorAll("img");
    const spansMap = {};
    imgElements.forEach((img) => {
      img.onload = () => {
        spansMap[img.dataset.id] = Math.ceil(img.naturalHeight / 20) + 1;
        setSpans({ ...spansMap });
      };
    });
  }, [windowWidth]);

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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Showcase Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore highlights from my projects, designs, and contributions.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div
          ref={galleryRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 auto-rows-[10px]"
          style={{ gridAutoRows: "10px" }}
        >
          {galleryItems.map(({ id, title, image }) => (
            <motion.div
              key={id}
              className="relative rounded-xl overflow-hidden cursor-pointer shadow-md dark:shadow-gray-800 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-shadow hover:shadow-lg"
              style={{
                gridRowEnd: `span ${spans[id] || 15}`,
              }}
              onClick={() => setSelectedId(id)}
              layoutId={`card-container-${id}`}
              whileHover={{ scale: 1.03 }}
            >
              <motion.img
                src={image}
                alt={title}
                className="w-full h-auto object-cover"
                data-id={id}
                layoutId={`card-image-${id}`}
                loading="lazy"
              />
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3"
                layoutId={`card-title-${id}`}
              >
                <h3 className="text-white font-semibold text-sm sm:text-base">
                  {title}
                </h3>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedId && selectedItem && (
            <>
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
              />
              <motion.div
                layoutId={`card-container-${selectedId}`}
                className="fixed top-1/2 left-1/2 max-w-xl w-full p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-xl z-50 -translate-x-1/2 -translate-y-1/2"
              >
                <motion.img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-64 object-cover rounded-xl mb-6"
                  layoutId={`card-image-${selectedId}`}
                />
                <motion.h3
                  layoutId={`card-title-${selectedId}`}
                  className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
                >
                  {selectedItem.title}
                </motion.h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  {selectedItem.description}
                </p>
                <button
                  onClick={() => setSelectedId(null)}
                  className="btn-primary mx-auto block"
                  aria-label="Close modal"
                >
                  Close
                </button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
