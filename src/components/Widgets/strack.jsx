import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function MusicWidget({ track }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(track.link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-2xl p-4 shadow-md space-x-4 max-w-md">
      <img
        src={track.cover}
        alt={track.title}
        className="w-16 h-16 rounded-xl object-cover shadow-inner"
      />
      <div className="flex-1">
        <div className="text-sm text-gray-700 dark:text-gray-200 font-semibold truncate">
          {track.title}
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
          {track.artist}
        </div>
        <a
          href={track.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-primary-600 dark:text-primary-400 mt-1 inline-block hover:underline"
        >
          Open in Spotify
        </a>
      </div>
      <button
        onClick={handleCopy}
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        title="Copy Link"
      >
        {copied ? (
          <Check className="w-4 h-4 text-green-500" />
        ) : (
          <Copy className="w-4 h-4 text-gray-500" />
        )}
      </button>
    </div>
  );
}
