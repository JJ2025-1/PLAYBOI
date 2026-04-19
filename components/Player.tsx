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
        <div className="h-14 w-14 rounded-md bg-black bg-[url('/poster.png')] bg-contain bg-center bg-no-repeat border border-white/5 p-1" />
        <div className="flex flex-col truncate">
          <span className="text-sm font-bold text-white hover:underline cursor-pointer truncate">Midnight Soundscape</span>
          <span className="text-xs text-[#b3b3b3] hover:text-white hover:underline cursor-pointer truncate">Soundcore Originals</span>
        </div>
        <button 
          onClick={() => setIsLiked(!isLiked)}
          className={cn(
            "ml-2 transition-colors",
            isLiked ? "text-red-600" : "text-[#b3b3b3] hover:text-white"
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
            className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-black hover:scale-105 transition-transform shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          >
            {isPlaying ? <Pause size={22} fill="currentColor" /> : <Play size={22} fill="currentColor" className="ml-0.5" />}
          </button>
          <button className="text-[#b3b3b3] hover:text-white transition-colors">
            <SkipForward size={24} fill="currentColor" />
          </button>
          <button className="text-[#b3b3b3] hover:text-white transition-colors">
            <Repeat size={18} />
          </button>
        </div>
        
        <div className="flex items-center gap-2 w-full">
          <span className="text-[11px] text-[#b3b3b3] min-w-[30px] text-right font-medium">1:24</span>
          <div className="h-1 flex-1 bg-zinc-800 rounded-full overflow-hidden relative group cursor-pointer">
            <div 
              className="absolute h-full bg-red-600 group-hover:bg-red-500 transition-colors shadow-[0_0_8px_rgba(220,38,38,0.5)]" 
              style={{ width: `${progress}%` }} 
            />
            <div 
              className="absolute h-3 w-3 bg-white rounded-full -top-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_10px_rgba(255,255,255,0.5)]"
              style={{ left: `calc(${progress}% - 6px)` }}
            />
          </div>
          <span className="text-[11px] text-[#b3b3b3] min-w-[30px] font-medium">3:45</span>
        </div>
      </div>

      {/* Extra Controls */}
      <div className="flex items-center justify-end gap-3 w-[30%]">
        <button className="text-[#b3b3b3] hover:text-red-500 transition-colors">
          <Mic2 size={16} />
        </button>
        <button className="text-[#b3b3b3] hover:text-red-500 transition-colors">
          <ListMusic size={16} />
        </button>
        <button className="text-[#b3b3b3] hover:text-red-500 transition-colors">
          <MonitorSpeaker size={16} />
        </button>
        <div className="flex items-center gap-2 w-24 group">
          <Volume2 size={18} className="text-[#b3b3b3] group-hover:text-white" />
          <div className="h-1 flex-1 bg-zinc-800 rounded-full overflow-hidden relative cursor-pointer">
            <div className="absolute h-full bg-red-600 group-hover:bg-red-500" style={{ width: `${volume}%` }} />
          </div>
        </div>
        <button className="text-[#b3b3b3] hover:text-white transition-colors">
          <Maximize2 size={16} />
        </button>
      </div>
    </div>
  );
}
