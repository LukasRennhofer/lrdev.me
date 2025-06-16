import React from 'react';

const FeaturedInsight = ({ title = "✨ Featured Insight", children }) => {
  return (
    <div className="rounded-xl p-6 mb-12 bg-gradient-to-r from-indigo-50 to-blue-100 dark:from-indigo-900 dark:to-blue-950 shadow-md">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 dark:text-gray-300">
        {children}
      </p>
    </div>
  );
};

export default FeaturedInsight;