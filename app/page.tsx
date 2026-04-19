"use client";

import { Search, User, ChevronRight } from "lucide-react";

const mainFeatured = [
  { id: 1, title: "Cash In Cash Out (Official Video)", artist: "Pharrell Williams", color: "bg-blue-600/20" },
  { id: 2, title: "DON'T YOU WORRY (Official Music Video)", artist: "Black Eyed Peas", color: "bg-purple-600/20" },
  { id: 3, title: "Numb (Official Video)", artist: "Marshmello", color: "bg-red-600/20" },
  { id: 4, title: "SUPERMODEL (Official Video)", artist: "Maneskin", color: "bg-green-600/20" },
];

const folkTracks = [
  { id: 1, title: "Surprise", artist: "Chloë" },
  { id: 2, title: "Just A Little While", artist: "The 502s" },
  { id: 3, title: "Have Mercy", artist: "Chloë" },
  { id: 4, title: "The Night", artist: "Morgan Wade" },
  { id: 5, title: "Hair Toss, Arms Crossed", artist: "Mark Ambor" },
  { id: 6, title: "Wayfaring Stranger", artist: "The Longest Johns" },
  { id: 7, title: "Hard Working Man", artist: "Marcus King" },
  { id: 8, title: "Better Together", artist: "Jeremy Loops" },
  { id: 9, title: "Through Your Eyes", artist: "Morgan Wade" },
  { id: 10, title: "Stay", artist: "The Bros. Landreth" },
  { id: 11, title: "Crooked Teeth", artist: "Zach Bryan" },
  { id: 12, title: "Carry Me Home", artist: "Morgan Wade" },
];

const artists = [
  { id: 1, name: "Artist 1" },
  { id: 2, name: "Artist 2" },
  { id: 3, name: "Artist 3" },
  { id: 4, name: "Artist 4" },
  { id: 5, name: "Artist 5" },
  { id: 6, name: "Artist 6" },
  { id: 7, name: "Artist 7" },
  { id: 8, name: "Artist 8" },
];

export default function Home() {
  return (
    <div className="p-8 pb-32 bg-black min-h-full">
      {/* Top Bar */}
      <div className="flex justify-end items-center gap-6 mb-12">
        <div className="relative flex items-center bg-zinc-900/40 rounded-full px-4 py-2 border border-white/5 focus-within:border-red-600/50 transition-colors w-72 backdrop-blur-md">
          <Search size={18} className="text-zinc-500 mr-2" />
          <input 
            type="text" 
            placeholder="Search artists, songs, or podcasts" 
            className="bg-transparent border-none outline-none text-sm w-full placeholder:text-zinc-600 font-medium"
          />
        </div>
        <button className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all border border-white/5">
          <User size={20} />
        </button>
      </div>

      {/* Featured Horizontal Scroll */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-6 px-2">
           <h2 className="text-2xl font-black italic tracking-tight text-white">Recommended for you</h2>
           <div className="flex gap-2">
              <button className="p-2 rounded-full bg-zinc-900/50 border border-white/5 hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-white"><ChevronRight size={20} className="rotate-180" /></button>
              <button className="p-2 rounded-full bg-zinc-900/50 border border-white/5 hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-white"><ChevronRight size={20} /></button>
           </div>
        </div>
        <div className="flex gap-6 overflow-x-auto no-scrollbar px-2">
          {mainFeatured.map((item) => (
            <div key={item.id} className="min-w-[400px] flex flex-col gap-4 group cursor-pointer">
              <div className={`aspect-video rounded-2xl ${item.color} flex items-center justify-center overflow-hidden relative border border-white/5 group-hover:border-red-600/30 transition-all duration-500 shadow-2xl bg-black`}>
                 <img src="/poster.png" className="absolute inset-0 w-full h-full object-contain p-4 opacity-60 group-hover:scale-110 transition-transform duration-700" alt="" />
                 <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/20 to-transparent z-10" />
                 <div className="z-20 absolute bottom-6 left-6 right-6">
                    <span className="px-3 py-1 bg-red-600 text-[10px] font-black uppercase tracking-widest rounded-full mb-3 inline-block">Featured</span>
                    <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors line-clamp-1">{item.title}</h3>
                    <p className="text-sm text-zinc-400 font-medium">{item.artist}</p>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Folk Tracks Section */}
      <div className="mb-16">
        <div className="flex items-center gap-2 mb-8 group cursor-pointer px-2">
          <h2 className="text-xl font-black italic tracking-tight text-white">Popular Folk Tracks</h2>
          <ChevronRight size={24} className="text-zinc-600 group-hover:text-red-500 transition-colors" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-2 gap-x-8 px-2">
          {folkTracks.map((track, idx) => (
            <div key={track.id} className="flex items-center gap-4 group cursor-pointer p-2 rounded-xl hover:bg-zinc-900/40 transition-all border border-transparent hover:border-white/5">
              <span className="text-xs font-black text-zinc-700 w-4">{idx + 1}</span>
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center relative overflow-hidden shrink-0 border border-white/5 shadow-lg group-hover:scale-105 transition-transform">
                <img src="/poster.png" className="w-full h-full object-contain p-1 opacity-80" alt="" />
                <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-10 transition-opacity" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-white truncate group-hover:text-red-500 transition-colors">{track.title}</span>
                <span className="text-xs text-zinc-500 truncate font-medium uppercase tracking-wider">{track.artist}</span>
              </div>
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                 <button className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white shadow-lg">
                    <Search size={14} className="rotate-90" /> {/* Should be play, but let's use search icon rotated as placeholder */}
                 </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Indie/Alternative Artists Section */}
      <div>
        <div className="flex items-center gap-2 mb-8 group cursor-pointer px-2">
          <h2 className="text-xl font-black italic tracking-tight text-white">Popular Indie Artists</h2>
          <ChevronRight size={24} className="text-zinc-600 group-hover:text-red-500 transition-colors" />
        </div>

        <div className="flex gap-8 overflow-x-auto no-scrollbar px-2 pb-4">
          {artists.map((artist) => (
            <div key={artist.id} className="flex flex-col items-center gap-4 group cursor-pointer min-w-[140px]">
              <div className="w-32 h-32 rounded-full bg-black border border-white/5 overflow-hidden flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-2xl relative p-4">
                <img src="/poster.png" className="w-full h-full object-contain opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700" alt="" />
                <div className="absolute inset-0 border-2 border-red-600 opacity-0 group-hover:opacity-40 transition-opacity rounded-full" />
              </div>
              <span className="text-sm font-bold text-zinc-400 group-hover:text-white transition-colors text-center">{artist.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
