"use client";

import { useState } from "react";
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  PlusSquare,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";

export function RightSidebar() {
  const [isPlaying, setIsPlaying] = useState(false);

  const queue = [
    { title: "Whistle", artist: "Flo Rida" },
    { title: "Born To Die", artist: "Lana Del Rey" },
    { title: "Off To The Races", artist: "Lana Del Rey" },
    { title: "Blue Jeans (Album Version)", artist: "Lana Del Rey" },
    { title: "Video Games (Album Version)", artist: "Lana Del Rey" },
    { title: "Diet Mountain Dew", artist: "Lana Del Rey" },
  ];

  return (
    <aside className="hidden lg:flex w-80 flex-col bg-[#002233] text-white overflow-hidden border-l border-black/20">
      {/* Player Controls */}
      <div className="flex items-center justify-between px-6 py-6 border-b border-black/10">
        <button className="text-gray-400 hover:text-white transition-colors">
          <SkipBack size={28} fill="currentColor" />
        </button>
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="h-12 w-12 flex items-center justify-center text-white hover:scale-105 transition-transform"
        >
          {isPlaying ? <Pause size={40} fill="currentColor" /> : <Play size={40} fill="currentColor" />}
        </button>
        <button className="text-gray-400 hover:text-white transition-colors">
          <SkipForward size={28} fill="currentColor" />
        </button>
      </div>

      {/* Album Art & Track Info */}
      <div className="p-0 border-b border-black/10">
        <img 
          src="https://images.unsplash.com/photo-1514525253344-99a42994a478?q=80&w=400&auto=format&fit=crop" 
          alt="Currently Playing" 
          className="w-full aspect-square object-cover"
        />
        <div className="p-4 bg-black/40 flex items-center justify-between">
          <div className="flex flex-col truncate">
            <span className="text-lg font-bold truncate">Born To Die</span>
            <span className="text-sm text-gray-400 truncate">Lana Del Rey</span>
          </div>
          <button className="text-gray-400 hover:text-white">
            <PlusSquare size={24} />
          </button>
        </div>
      </div>

      {/* Queue Section */}
      <div className="flex-1 flex flex-col min-h-0">
        <div className="flex items-center justify-between px-4 py-3 bg-[#001c2b] shadow-inner">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00d1ff]">Queue</span>
          <button className="text-[10px] font-bold uppercase tracking-widest bg-black/20 px-3 py-1 rounded hover:bg-black/40 transition-colors">
            Clear
          </button>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar bg-[#002233]">
          {queue.map((track, i) => (
            <div 
              key={i} 
              className={cn(
                "px-4 py-3 border-b border-black/10 hover:bg-black/20 cursor-pointer transition-colors flex flex-col gap-0.5",
                i === 1 ? "bg-[#001c2b] border-l-2 border-[#e67e22]" : ""
              )}
            >
              <span className={cn("text-xs font-bold truncate", i === 1 ? "text-white" : "text-gray-400")}>
                {track.title}
              </span>
              <span className="text-[10px] text-gray-500 truncate font-bold">
                by {track.artist}
              </span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
