import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark, oneLight } from "react-syntax-highlighter/dist/cjs/styles/prism";

// Icons
import { FaCode } from "react-icons/fa";
import {
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiRust,
  SiTypescript,
  SiGo,
  SiHtml5,
  SiCss3,
  SiC,
  SiOpengl,
} from "react-icons/si";

const languageMeta = {
  javascript: { icon: SiJavascript, label: "JavaScript" },
  typescript: { icon: SiTypescript, label: "TypeScript" },
  python: { icon: SiPython, label: "Python" },
  cpp: { icon: SiCplusplus, label: "C++" },
  cplusplus: { icon: SiCplusplus, label: "C++" },
  c: { icon: SiC, label: "C" },
  rust: { icon: SiRust, label: "Rust" },
  go: { icon: SiGo, label: "Go" },
  html: { icon: SiHtml5, label: "HTML" },
  css: { icon: SiCss3, label: "CSS" },
  glsl: { icon: SiOpengl, label: "GLSL" },
};

const getLanguageData = (lang) => {
  const fallback = { icon: FaCode, label: lang };
  return languageMeta[lang.toLowerCase()] || fallback;
};

const CodeSnippet = ({ title = "Code Snippet", language = "javascript", code = "" }) => {
  const { icon: Icon, label } = getLanguageData(language);

  // State to track if dark mode is enabled via media query
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Set initial value
    setIsDarkMode(mediaQuery.matches);

    // Event listener for changes
    const handler = (e) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <div className="relative rounded-xl p-6 mb-12 bg-gradient-to-r from-indigo-50 to-blue-100 dark:from-indigo-950 dark:to-indigo-900 shadow-md">
      <div className="flex justify-between items-center mb-2">
        <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">{title}</p>
      </div>

      {/* Language Icon in Top Right */}
      <div className="absolute top-4 right-4 flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-300">
        <Icon className="w-4 h-4" />
        <span className="hidden sm:inline">{label}</span>
      </div>

      <SyntaxHighlighter
        language={language}
        style={isDarkMode ? oneDark : oneLight}
        showLineNumbers
        wrapLongLines
        customStyle={{
          borderRadius: 12,
          padding: 16,
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
        className="dark:!bg-gray-900 dark:!text-gray-100 dark:!shadow-none"
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSnippet;
