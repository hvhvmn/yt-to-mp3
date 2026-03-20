import React from 'react';
import { useState } from "react";

const App = () => {
  const [url, setUrl] = useState("");

  const handleDownload = () => {
    if (!url.trim()) return alert("Enter a URL");

    window.location.href = `https://yt-to-mp3-1-03ij.onrender.com/api/yt?url=${encodeURIComponent(url)}`;
    setUrl("")
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#0a0f1e] text-white px-6 py-12 relative overflow-hidden">
      
      {/* Background Glow Effect - Adjusted for better mobile centering */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[400px] opacity-20 blur-[80px] sm:blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, rgba(147, 51, 234, 0.4) 50%, transparent 70%)'
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-5xl w-full text-center">
        
        {/* Logo Section - Responsive scaling */}
        <div className="flex items-center gap-2 mb-6 sm:mb-10">
          <div className="bg-blue-600 p-2 rounded-xl shadow-lg shadow-blue-500/20">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 sm:h-6 sm:w-6 text-white" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </div>
          <span className="text-xl sm:text-2xl font-bold tracking-tight">StreamSave</span>
        </div>

        {/* Hero Text - Dynamic font sizing based on viewport */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-8 sm:mb-14">
        Turn Your  Videos into <br className="hidden sm:block" /> MP3 <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            instantly.
          </span>
        </h1>

        {/* Search/Input Bar - Switches to column on very small screens if needed */}
        <div className="w-full max-w-3xl mx-auto">
          <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center p-1.5 sm:p-2 rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
            
            <div className="flex items-center flex-1">
              {/* Link Icon - Hidden on tiny mobile to save space */}
              <div className="hidden xs:flex pl-4 pr-2 text-white/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>

              <input
                type="text"
                value={url}
                onChange={(e)=>setUrl(e.target.value)}
                placeholder="Paste YouTube URL here..."
                className="w-full bg-transparent border-none outline-none text-white placeholder-white/20 py-4 px-4 sm:px-2 text-base sm:text-lg lg:text-xl"
              />
            </div>

            <button
            onClick={()=>handleDownload()}
            className="bg-blue-600 hover:bg-blue-500 active:scale-[0.98] transition-all text-white font-bold px-6 sm:px-10 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg shadow-blue-500/25 mt-2 sm:mt-0">
      Download MP3
            </button>
          </div>
        </div>
        
        {/* Optional: Simple footer hint for mobile users */}
        <p className="mt-8 text-white/20 text-sm font-medium tracking-wide uppercase">
          Supports YouTube, Vimeo, and more
        </p>
      </div>
    </div>
  );
};

export default App;