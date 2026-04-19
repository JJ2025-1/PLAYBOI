"use client";

import { useState } from "react";
import { 
  CloudRain, 
  Wind, 
  Zap, 
  Waves, 
  Bird, 
  Flame, 
  Coffee, 
  Moon,
  Volume2,
  VolumeX,
  Play,
  Pause,
  RefreshCcw
} from "lucide-react";
import { cn } from "@/lib/utils";

const sounds = [
  { id: "rain", name: "Soft Rain", icon: CloudRain, color: "from-blue-500/20 to-blue-600/20" },
  { id: "thunder", name: "Thunder", icon: Zap, color: "from-yellow-500/20 to-yellow-600/20" },
  { id: "wind", name: "Autumn Wind", icon: Wind, color: "from-zinc-500/20 to-zinc-600/20" },
  { id: "waves", name: "Ocean Waves", icon: Waves, color: "from-cyan-500/20 to-cyan-600/20" },
  { id: "birds", name: "Forest Birds", icon: Bird, color: "from-green-500/20 to-green-600/20" },
  { id: "fire", name: "Campfire", icon: Flame, color: "from-orange-500/20 to-orange-600/20" },
  { id: "cafe", name: "Cafe Ambience", icon: Coffee, color: "from-brown-500/20 to-brown-600/20" },
  { id: "night", name: "Summer Night", icon: Moon, color: "from-indigo-500/20 to-indigo-600/20" },
];

function SoundTile({ name, icon: Icon, color }: { name: string, icon: any, color: string }) {
  const [isActive, setIsActive] = useState(false);
  const [volume, setVolume] = useState(50);

  return (
    <div 
      className={cn(
        "group relative flex flex-col gap-4 rounded-3xl border p-6 transition-all duration-300 cursor-pointer",
        isActive 
          ? "border-primary bg-primary/5 shadow-[0_0_20px_rgba(0,209,255,0.1)]" 
          : "border-border bg-muted/20 hover:border-border/80 hover:bg-muted/30"
      )}
      onClick={() => setIsActive(!isActive)}
    >
      <div className="flex items-center justify-between">
        <div className={cn(
          "flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br transition-all",
          isActive ? "from-primary to-secondary text-primary-foreground scale-110 shadow-lg" : "from-muted to-muted/50 text-muted-foreground",
          !isActive && color
        )}>
          <Icon size={24} />
        </div>
        <div className={cn(
          "h-2 w-2 rounded-full transition-all",
          isActive ? "bg-primary animate-pulse shadow-[0_0_8px_#00d1ff]" : "bg-zinc-700"
        )} />
      </div>
      
      <div className="flex flex-col gap-1">
        <h3 className={cn(
          "font-bold transition-colors",
          isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
        )}>{name}</h3>
      </div>

      {isActive && (
        <div className="mt-2 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300" onClick={(e) => e.stopPropagation()}>
          <div className="flex items-center gap-3">
            <VolumeX size={14} className="text-muted-foreground" />
            <div className="h-1.5 flex-1 bg-zinc-800 rounded-full overflow-hidden relative cursor-pointer group/slider">
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={volume}
                onChange={(e) => setVolume(parseInt(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              <div 
                className="absolute h-full bg-primary transition-all" 
                style={{ width: `${volume}%` }} 
              />
            </div>
            <Volume2 size={14} className="text-muted-foreground" />
          </div>
        </div>
      )}
    </div>
  );
}

export default function SoundscapesPage() {
  const [isGlobalPlaying, setIsGlobalPlaying] = useState(false);

  return (
    <div className="flex flex-col px-8 pb-10">
      <header className="pt-8 pb-12 flex items-end justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-bold tracking-[0.2em] text-primary uppercase">Ambient Mixer</p>
          <h1 className="text-5xl font-black tracking-tight">SOUNDSCAPES</h1>
          <p className="text-muted-foreground mt-2 max-w-lg">Mix your favorite ambient sounds to create a personalized environment for relaxation or focus.</p>
        </div>
        
        <div className="flex gap-4">
          <button className="flex h-14 items-center gap-2 rounded-2xl border border-border bg-muted/20 px-6 font-bold hover:bg-muted/40 transition-colors">
            <RefreshCcw size={18} /> Reset
          </button>
          <button 
            onClick={() => setIsGlobalPlaying(!isGlobalPlaying)}
            className="flex h-14 items-center gap-3 rounded-2xl bg-foreground px-8 font-black text-background transition-all hover:scale-105 active:scale-95 shadow-xl"
          >
            {isGlobalPlaying ? <Pause fill="currentColor" size={20} /> : <Play fill="currentColor" size={20} />}
            {isGlobalPlaying ? "STOP ALL" : "PLAY MIX"}
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sounds.map((sound) => (
          <SoundTile key={sound.id} {...sound} />
        ))}
      </div>

      {/* Preset Section */}
      <section className="mt-20">
        <h2 className="text-2xl font-bold mb-6">Expert Presets</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { name: "Stormy Night", sounds: "Rain + Thunder + Wind", image: "https://images.unsplash.com/photo-1534274938764-4ef327959d97?q=80&w=400&auto=format&fit=crop" },
            { name: "Summer Forest", sounds: "Birds + Wind + Fire", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=400&auto=format&fit=crop" },
            { name: "Deep Ocean", sounds: "Waves + Soft Rain", image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=400&auto=format&fit=crop" },
          ].map((preset) => (
            <div key={preset.name} className="group relative h-48 overflow-hidden rounded-3xl bg-zinc-900 cursor-pointer">
              <img src={preset.image} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white">{preset.name}</h3>
                <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider">{preset.sounds}</p>
              </div>
              <button className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Play fill="currentColor" size={16} className="text-white ml-0.5" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
