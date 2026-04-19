"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const genres = [
  {
    name: "Pop/Rock",
    albums: [
      { id: 1, title: "Analog Man", artist: "Joe Walsh", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=200&auto=format&fit=crop" },
      { id: 2, title: "Bear Creek", artist: "Brandi Carlile", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=200&auto=format&fit=crop" },
      { id: 3, title: "Strange Euphoria", artist: "Heart", image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=200&auto=format&fit=crop" },
      { id: 4, title: "That's Why God Made Radio", artist: "The Beach Boys", image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=200&auto=format&fit=crop" },
      { id: 5, title: "Americana", artist: "Neil Young/Crazy Horse", image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=200&auto=format&fit=crop" },
    ]
  },
  {
    name: "Alternative",
    albums: [
      { id: 6, title: "Strangeland", artist: "Keane", image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=200&auto=format&fit=crop" },
      { id: 7, title: "Master of My Make-Believe", artist: "Santigold", image: "https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=200&auto=format&fit=crop" },
      { id: 8, title: "Boys & Girls", artist: "Alabama Shakes", image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=200&auto=format&fit=crop" },
      { id: 9, title: "Amaryllis", artist: "Shinedown", image: "https://images.unsplash.com/photo-1514525253344-99a42994a478?q=80&w=200&auto=format&fit=crop" },
      { id: 10, title: "Born To Die", artist: "Lana Del Rey", image: "https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=200&auto=format&fit=crop" },
    ]
  }
];

export default function BrowsePage() {
  const [activeTab, setActiveTab] = useState("New");

  return (
    <div className="flex flex-col min-h-full pb-10 bg-[#f0f0f0]">
      {/* Black Title Bar */}
      <div className="h-12 w-full bg-black flex items-center px-6">
        <h1 className="text-xl font-bold text-white">Browse</h1>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col md:flex-row items-center gap-6 p-6 border-b border-gray-300 shadow-sm bg-gradient-to-b from-[#e0e0e0] to-[#f0f0f0]">
        <button className="flex items-center justify-between w-full md:w-56 bg-gradient-to-b from-[#0099cc] to-[#006699] text-white px-4 py-2 rounded shadow-inner text-sm font-bold">
          Browse Genres
          <ChevronDown size={16} />
        </button>

        <div className="flex items-center rounded-lg overflow-hidden border border-gray-400 shadow-sm">
          {["New", "Popular", "Staff Picks"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-8 py-2 text-sm font-bold transition-all",
                activeTab === tab 
                  ? "bg-gradient-to-b from-[#e67e22] to-[#d35400] text-white shadow-inner" 
                  : "bg-gradient-to-b from-[#666666] to-[#444444] text-gray-300 hover:text-white border-r border-gray-500 last:border-0"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Genre Sections */}
      <div className="flex flex-col">
        {genres.map((genre) => (
          <section key={genre.name} className="flex border-b border-gray-300 last:border-0">
            {/* Genre Header - Left Column */}
            <div className="w-32 md:w-48 p-6 flex flex-col items-start gap-4 border-r border-gray-200">
              <h2 className="text-lg font-bold text-gray-700">{genre.name}</h2>
              <button className="px-4 py-1 text-xs font-bold text-white bg-gradient-to-b from-gray-500 to-gray-700 rounded shadow-sm hover:from-gray-600 hover:to-gray-800 transition-all">
                More
              </button>
            </div>

            {/* Album Grid - Right Column */}
            <div className="flex-1 p-6 overflow-x-auto no-scrollbar">
              <div className="flex gap-6 min-w-max">
                {genre.albums.map((album, i) => (
                  <div key={album.id} className="flex flex-col gap-2 w-32 md:w-40 group cursor-pointer">
                    <div className="aspect-square bg-white p-1 border border-gray-300 shadow-md group-hover:border-gray-400 transition-all">
                      <img 
                        src={album.image} 
                        alt={album.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[11px] font-bold text-[#006699] hover:underline truncate">
                        {i + 1}. {album.title}
                      </span>
                      <span className="text-[10px] text-gray-500 font-bold">
                        by {album.artist}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
