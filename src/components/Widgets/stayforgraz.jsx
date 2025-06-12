import React from 'react';

export default function StayForGrazMemorialWidget() {
  return (
      <div className="flex justify-center items-center min-h-screen">
      <div
        className="max-w-md bg-gray-100 dark:bg-gray-900 border-l-4 border-gray-700 dark:border-gray-300 p-6 rounded-lg shadow-md select-none"
        role="complementary"
        aria-label="StayForGraz Memorial"
      >
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0 text-gray-700 dark:text-gray-300" aria-hidden="true">
          {/* Candle SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2C13 5 10 6 10 9a2 2 0 004 0c0-3-3-4-2-7z" />
            <rect x="9" y="9" width="6" height="11" rx="2" ry="2" />
          </svg>
        </div>

        <div className="text-gray-900 dark:text-gray-100">
          <h3 className="text-xl font-semibold mb-1">Remembering StayForGraz</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
            In memory of the victims of the tragic Graz event. Our hearts stand with the families and community.
          </p>
          <small className="text-gray-500 dark:text-gray-400 italic">🕯️ Never forgotten.</small>
        </div>
      </div>
    </div>
    </div>
  );
}
