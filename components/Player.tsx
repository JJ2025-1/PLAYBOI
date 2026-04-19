"use client";

import { useState } from "react";
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Repeat, 
  Shuffle, 
  Volume2, 
  Maximize2, 
  ListMusic,
  MonitorSpeaker,
  Mic2,
  Heart
} from "lucide-react";
import { cn } from "@/lib/utils";

export function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(35);
  const [volume, setVolume] = useState(70);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 right-0 h-20 bg-black px-4 flex items-center justify-between z-50">
      {/* Current Track */}
      <div className="flex items-center gap-4 w-[30%]">
        <div className="h-14 w-14 rounded-md bg-zinc-800 bg-[url('https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=200&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="flex flex-col truncate">
          <span className="text-sm font-bold text-white hover:underline cursor-pointer truncate">Midnight Soundscape</span>
          <span className="text-xs text-[#b3b3b3] hover:text-white hover:underline cursor-pointer truncate">Soundcore Originals</span>
        </div>
        <button 
          onClick={() => setIsLiked(!isLiked)}
          className={cn(
            "ml-2 transition-colors",
            isLiked ? "text-[#1ed760]" : "text-[#b3b3b3] hover:text-white"
          )}
        >
          <Heart size={18} fill={isLiked ? "currentColor" : "none"} />
        </button>
      </div>

      {/* Controls */}
      <div className="flex flex-col items-center gap-2 w-[40%] max-w-[600px]">
        <div className="flex items-center gap-6">
          <button className="text-[#b3b3b3] hover:text-white transition-colors">
            <Shuffle size={18} />
          </button>
          <button className="text-[#b3b3b3] hover:text-white transition-colors">
            <SkipBack size={24} fill="currentColor" />
          </button>
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-black hover:scale-105 transition-transform"
          >
            {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-0.5" />}
          </button>
          <button className="text-[#b3b3b3] hover:text-white transition-colors">
            <SkipForward size={24} fill="currentColor" />
          </button>
          <button className="text-[#b3b3b3] hover:text-white transition-colors">
            <Repeat size={18} />
          </button>
        </div>
        
        <div className="flex items-center gap-2 w-full">
          <span className="text-[11px] text-[#b3b3b3] min-w-[30px] text-right">1:24</span>
          <div className="h-1 flex-1 bg-[#4d4d4d] rounded-full overflow-hidden relative group cursor-pointer">
            <div 
              className="absolute h-full bg-white group-hover:bg-[#1ed760] transition-colors" 
              style={{ width: `${progress}%` }} 
            />
            <div 
              className="absolute h-3 w-3 bg-white rounded-full -top-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
              style={{ left: `calc(${progress}% - 6px)` }}
            />
          </div>
          <span className="text-[11px] text-[#b3b3b3] min-w-[30px]">3:45</span>
        </div>
      </div>

      {/* Extra Controls */}
      <div className="flex items-center justify-end gap-3 w-[30%]">
        <button className="text-[#b3b3b3] hover:text-[#1ed760] transition-colors">
          <Mic2 size={16} />
        </button>
        <button className="text-[#b3b3b3] hover:text-[#1ed760] transition-colors">
          <ListMusic size={16} />
        </button>
        <button className="text-[#b3b3b3] hover:text-[#1ed760] transition-colors">
          <MonitorSpeaker size={16} />
        </button>
        <div className="flex items-center gap-2 w-24 group">
          <Volume2 size={18} className="text-[#b3b3b3] group-hover:text-white" />
          <div className="h-1 flex-1 bg-[#4d4d4d] rounded-full overflow-hidden relative cursor-pointer">
            <div className="absolute h-full bg-white group-hover:bg-[#1ed760]" style={{ width: `${volume}%` }} />
          </div>
        </div>
        <button className="text-[#b3b3b3] hover:text-white transition-colors">
          <Maximize2 size={16} />
        </button>
      </div>
    </div>
  );
}
