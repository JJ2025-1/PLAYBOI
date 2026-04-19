"use client";

import { ChevronLeft, ChevronRight, Bell, Users, Search } from "lucide-react";

export function TopNav() {
  return (
    <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-between px-6 bg-[#090909]/80 backdrop-blur-md">
      <div className="flex items-center gap-2">
        <button className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-[#b3b3b3] hover:text-white transition-colors">
          <ChevronLeft size={24} />
        </button>
        <button className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-[#b3b3b3] hover:text-white transition-colors">
          <ChevronRight size={24} />
        </button>
        
        <div className="relative group ml-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#b3b3b3] group-focus-within:text-white transition-colors" size={20} />
          <input 
            type="text" 
            placeholder="What do you want to play?" 
            className="h-12 w-96 rounded-full bg-[#242424] pl-12 pr-4 text-sm text-white placeholder-[#757575] border border-transparent hover:border-[#3e3e3e] focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="rounded-full bg-white px-4 py-1.5 text-sm font-bold text-black hover:scale-105 transition-transform hidden md:block">
          Explore Premium
        </button>
        <button className="flex items-center gap-1.5 rounded-full bg-black px-3 py-1.5 text-sm font-bold text-white hover:scale-105 transition-transform">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1ed760] text-black">
            <span className="text-[10px] font-black italic">⬇</span>
          </span>
          Install App
        </button>
        <button className="p-2 text-[#b3b3b3] hover:text-white transition-colors">
          <Bell size={20} />
        </button>
        <button className="h-8 w-8 rounded-full bg-[#282828] border border-transparent hover:border-white/10 flex items-center justify-center overflow-hidden p-0.5">
          <div className="h-full w-full rounded-full bg-gradient-to-tr from-[#1ed760] to-[#1db954]" />
        </button>
      </div>
    </header>
  );
}
