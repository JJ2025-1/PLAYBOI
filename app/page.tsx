"use client";

import { Play, Heart, ChevronRight, MoreHorizontal, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const recentlyPlayed = [
  { id: 1, title: "Deep Focus", artist: "Ambient Flow", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=300&auto=format&fit=crop" },
  { id: 2, title: "Cyberpunk 2077", artist: "Hyper", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=300&auto=format&fit=crop" },
  { id: 3, title: "Morning Rain", artist: "Nature Sounds", image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=300&auto=format&fit=crop" },
  { id: 4, title: "Lofi Hip Hop", artist: "ChilledCow", image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=300&auto=format&fit=crop" },
  { id: 5, title: "Space Odyssey", artist: "Hans Zimmer", image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=300&auto=format&fit=crop" },
  { id: 6, title: "Jazz Vibes", artist: "Smooth Soul", image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=300&auto=format&fit=crop" },
];

const trending = [
  { id: 7, title: "Starboy", artist: "The Weeknd", image: "https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=300&auto=format&fit=crop" },
  { id: 8, title: "Blinding Lights", artist: "The Weeknd", image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=300&auto=format&fit=crop" },
  { id: 9, title: "After Hours", artist: "The Weeknd", image: "https://images.unsplash.com/photo-1514525253344-99a42994a478?q=80&w=300&auto=format&fit=crop" },
  { id: 10, title: "Save Your Tears", artist: "The Weeknd", image: "https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=300&auto=format&fit=crop" },
];

function MusicCard({ title, artist, image }: { title: string, artist: string, image: string }) {
  return (
    <div className="group relative flex flex-col gap-4 rounded-lg bg-[#181818] p-4 transition-all hover:bg-[#282828] cursor-pointer shadow-lg">
      <div className="relative aspect-square w-full overflow-hidden rounded-md shadow-2xl">
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center">
          <button className="absolute bottom-2 right-2 h-12 w-12 rounded-full bg-[#1ed760] text-black shadow-2xl scale-90 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 hover:scale-110 flex items-center justify-center">
            <Play fill="currentColor" size={24} className="ml-1" />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-1 min-h-[50px]">
        <h3 className="truncate font-bold text-white text-base">{title}</h3>
        <p className="truncate text-sm text-[#b3b3b3]">{artist}</p>
      </div>
    </div>
  );
}

function Section({ title, items }: { title: string, items: typeof recentlyPlayed }) {
  return (
    <section className="px-6 mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold tracking-tight text-white hover:underline cursor-pointer">{title}</h2>
        <button className="text-sm font-bold text-[#b3b3b3] hover:underline transition-colors">
          Show all
        </button>
      </div>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {items.map((item) => (
          <MusicCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col pb-10 min-h-full bg-gradient-to-b from-[#222222] to-[#121212] transition-all duration-1000">
      {/* Hero Welcome */}
      <section className="px-6 pt-6">
        <h1 className="text-3xl font-black mb-6 text-white tracking-tight">Good afternoon</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: "Liked Songs", image: "https://images.unsplash.com/photo-1514525253344-99a42994a478?q=80&w=100&auto=format&fit=crop" },
            { title: "Deep Focus", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=100&auto=format&fit=crop" },
            { title: "Cyberpunk 2077", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=100&auto=format&fit=crop" },
            { title: "Morning Rain", image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=100&auto=format&fit=crop" },
            { title: "Lofi Hip Hop", image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=100&auto=format&fit=crop" },
            { title: "Space Odyssey", image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=100&auto=format&fit=crop" },
          ].map((item, i) => (
            <div key={i} className="group relative flex items-center gap-4 bg-white/5 rounded-md overflow-hidden hover:bg-white/10 transition-all cursor-pointer shadow-lg backdrop-blur-sm">
              <img src={item.image} alt={item.title} className="h-20 w-20 object-cover shadow-2xl" />
              <span className="font-bold text-white text-base truncate pr-12">{item.title}</span>
              <button className="absolute right-4 h-12 w-12 rounded-full bg-[#1ed760] text-black shadow-2xl opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300 hover:scale-105 flex items-center justify-center">
                <Play fill="currentColor" size={24} className="ml-1" />
              </button>
            </div>
          ))}
        </div>
      </section>

      <Section title="Made For You" items={recentlyPlayed} />
      
      <Section title="Your top mixes" items={trending} />

      <Section title="Recently Played" items={recentlyPlayed} />
      
      {/* Soundscape Promo (Refined for Spotify Style) */}
      <section className="px-6 mt-12 mb-8">
        <div className="relative group overflow-hidden rounded-lg bg-gradient-to-br from-[#1c1c1c] to-[#0a0a0a] border border-white/5 p-8 transition-all hover:border-white/10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1ed760] uppercase tracking-wider">
                <Clock size={14} /> NEW FEATURE
              </div>
              <h2 className="text-4xl font-black text-white leading-tight">Immersive Soundscapes</h2>
              <p className="text-[#b3b3b3] text-lg max-w-xl">Create your own ambient environment. Mix rain, forest, and white noise directly in your player.</p>
              <button className="rounded-full bg-white px-8 py-3 font-bold text-black transition-all hover:scale-105 active:scale-95 shadow-xl">
                Try Ambient Mixer
              </button>
            </div>
            <div className="relative h-64 w-64 rotate-3 group-hover:rotate-0 transition-transform duration-500">
              <div className="absolute inset-0 bg-[#1ed760]/10 rounded-2xl blur-3xl group-hover:bg-[#1ed760]/20 transition-all" />
              <img 
                src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=400&auto=format&fit=crop" 
                className="h-full w-full object-cover rounded-2xl relative z-10 shadow-2xl border border-white/10"
                alt="Mixer"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
