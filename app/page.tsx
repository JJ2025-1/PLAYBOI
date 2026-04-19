"use client";

import Image from "next/image";
import { Play, Heart, MoreHorizontal, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const recentlyPlayed = [
  { id: 1, title: "Deep Focus", artist: "Ambient Flow", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=300&auto=format&fit=crop" },
  { id: 2, title: "Cyberpunk 2077", artist: "Hyper", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=300&auto=format&fit=crop" },
  { id: 3, title: "Morning Rain", artist: "Nature Sounds", image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=300&auto=format&fit=crop" },
  { id: 4, title: "Lofi Hip Hop", artist: "ChilledCow", image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=300&auto=format&fit=crop" },
  { id: 5, title: "Space Odyssey", artist: "Hans Zimmer", image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=300&auto=format&fit=crop" },
];

const trending = [
  { id: 6, title: "Starboy", artist: "The Weeknd", image: "https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=300&auto=format&fit=crop" },
  { id: 7, title: "Blinding Lights", artist: "The Weeknd", image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=300&auto=format&fit=crop" },
  { id: 8, title: "After Hours", artist: "The Weeknd", image: "https://images.unsplash.com/photo-1514525253344-99a42994a478?q=80&w=300&auto=format&fit=crop" },
  { id: 9, title: "Save Your Tears", artist: "The Weeknd", image: "https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=300&auto=format&fit=crop" },
];

function MusicCard({ title, artist, image }: { title: string, artist: string, image: string }) {
  return (
    <div className="group relative flex flex-col gap-3 rounded-xl bg-muted/20 p-4 transition-all hover:bg-muted/40 cursor-pointer">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg">
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center">
          <button className="h-12 w-12 rounded-full bg-primary text-primary-foreground shadow-2xl scale-90 group-hover:scale-100 transition-transform">
            <Play fill="currentColor" className="ml-1" />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="truncate font-bold text-foreground">{title}</h3>
        <p className="truncate text-xs text-muted-foreground">{artist}</p>
      </div>
    </div>
  );
}

function Section({ title, items }: { title: string, items: typeof recentlyPlayed }) {
  return (
    <section className="px-8 mt-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">{title}</h2>
        <button className="text-sm font-semibold text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors">
          View all <ChevronRight size={16} />
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
    <div className="flex flex-col pb-10">
      {/* Hero Banner */}
      <section className="px-8 pt-6">
        <div className="relative h-[400px] w-full overflow-hidden rounded-3xl bg-zinc-900 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=1200&auto=format&fit=crop" 
            alt="Hero" 
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute bottom-12 left-12 z-20 max-w-lg">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">NEW RELEASE</p>
            <h1 className="mb-4 text-6xl font-black tracking-tight text-white leading-tight">
              ASTRONOMY <br /> <span className="text-primary/90">VISUALS</span>
            </h1>
            <p className="mb-8 text-lg text-zinc-300">Experience the sound of the cosmos with our latest immersive soundscape collection.</p>
            <div className="flex gap-4">
              <button className="flex h-14 items-center gap-2 rounded-2xl bg-primary px-8 text-base font-bold text-primary-foreground transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20">
                <Play fill="currentColor" size={20} /> Listen Now
              </button>
              <button className="flex h-14 items-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-8 text-base font-bold text-white backdrop-blur-md transition-all hover:bg-white/10">
                <Heart size={20} /> Add to Library
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Genres */}
      <section className="px-8 mt-12 overflow-x-auto no-scrollbar">
        <div className="flex gap-4">
          {["Relax", "Focus", "Study", "Sleep", "Energize", "Yoga", "Deep Bass"].map((genre) => (
            <button 
              key={genre}
              className="whitespace-nowrap rounded-2xl bg-muted/30 px-6 py-3 text-sm font-bold text-foreground transition-all hover:bg-primary hover:text-primary-foreground border border-border/50"
            >
              {genre}
            </button>
          ))}
        </div>
      </section>

      <Section title="Recently Played" items={recentlyPlayed} />
      
      {/* Soundscape Promo */}
      <section className="px-8 mt-16">
        <div className="relative flex h-64 w-full items-center overflow-hidden rounded-3xl bg-gradient-to-br from-[#1c1c21] to-[#0a0a0c] border border-border p-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-3">Create your Soundscape</h2>
            <p className="text-muted-foreground max-w-md mb-6">Mix and match natural sounds to create your perfect environment for work or sleep.</p>
            <button className="rounded-xl bg-secondary px-6 py-3 font-bold transition-transform hover:scale-105">
              Open Mixer
            </button>
          </div>
          <div className="relative h-48 w-48 hidden md:block">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
            <img 
              src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=400&auto=format&fit=crop" 
              className="h-full w-full object-cover rounded-2xl relative z-10 shadow-2xl"
              alt="Mixer"
            />
          </div>
        </div>
      </section>

      <Section title="Trending Now" items={trending} />
    </div>
  );
}
