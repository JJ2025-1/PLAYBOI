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
    <div className="p-8 pb-20">
      {/* Top Bar */}
      <div className="flex justify-end items-center gap-6 mb-8">
        <div className="relative flex items-center bg-slate-900/50 rounded-md px-3 py-1.5 border border-slate-800">
          <Search size={16} className="text-slate-500 mr-2" />
          <input 
            type="text" 
            placeholder="Search" 
            className="bg-transparent border-none outline-none text-sm w-48 placeholder:text-slate-600"
          />
        </div>
        <button className="text-slate-400 hover:text-white transition-colors">
          <User size={24} />
        </button>
      </div>

      {/* Featured Horizontal Scroll */}
      <div className="flex gap-4 overflow-x-auto no-scrollbar mb-12">
        {mainFeatured.map((item) => (
          <div key={item.id} className="min-w-[320px] flex flex-col gap-3 group cursor-pointer">
            <div className={`aspect-video rounded-lg ${item.color} flex items-center justify-center overflow-hidden relative border border-slate-800/50 group-hover:border-slate-700 transition-all`}>
               {/* "Poster" placeholder */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
               <div className="z-10 text-white font-bold opacity-20 text-4xl italic">PLAYBOI</div>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-sm font-bold text-white group-hover:underline truncate">{item.title}</h3>
              <p className="text-xs text-slate-500">{item.artist}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Popular Folk Tracks Section */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-6 group cursor-pointer">
          <h2 className="text-lg font-bold text-white">Popular Folk Tracks</h2>
          <ChevronRight size={20} className="text-slate-500 group-hover:text-white transition-colors" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-8">
          {folkTracks.map((track, idx) => (
            <div key={track.id} className="flex items-center gap-4 group cursor-pointer">
              <span className="text-xs font-bold text-slate-600 w-4">{idx + 1}</span>
              <div className="w-12 h-12 bg-slate-800 rounded flex items-center justify-center relative overflow-hidden shrink-0 border border-slate-700/50">
                {/* Poster placeholder */}
                <div className="text-[8px] font-black italic opacity-20">PB</div>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-white truncate group-hover:text-red-500 transition-colors">{track.title}</span>
                <span className="text-xs text-slate-500 truncate">{track.artist}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Indie/Alternative Artists Section */}
      <div>
        <div className="flex items-center gap-2 mb-6 group cursor-pointer">
          <h2 className="text-lg font-bold text-white">Popular Indie/Alternative Artists</h2>
          <ChevronRight size={20} className="text-slate-500 group-hover:text-white transition-colors" />
        </div>

        <div className="flex gap-6 overflow-x-auto no-scrollbar">
          {artists.map((artist) => (
            <div key={artist.id} className="flex flex-col items-center gap-3 group cursor-pointer">
              <div className="w-32 h-32 rounded-full bg-slate-800 border border-slate-700/50 overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform">
                {/* Artist Placeholder */}
                <div className="text-xs font-black italic opacity-20">ARTIST</div>
              </div>
              <span className="text-sm font-medium text-slate-400 group-hover:text-white transition-colors">{artist.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
