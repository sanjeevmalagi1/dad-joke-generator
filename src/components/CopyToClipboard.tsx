"use client";

import { useState } from "react";

interface Joke {
    setup: string;
    punchline: string;
  }
  
export default function CopyToClipboard({ joke }: { joke: Joke }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
      await navigator.clipboard.writeText(`${joke.setup} ${joke.punchline}`);
      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    };
  
    return (
      <button 
        onClick={handleCopy} 
        className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-3 px-8 rounded-md"
      >
        {copied ? 'Copied!' : 'Copy to clipboard'}
      </button>
    );
}