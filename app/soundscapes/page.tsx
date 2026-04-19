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
  { id: "rain", name: "Soft Rain", icon: CloudRain, color: "from-blue-500/10 to-blue-600/10" },
  { id: "thunder", name: "Thunder", icon: Zap, color: "from-yellow-500/10 to-yellow-600/10" },
  { id: "wind", name: "Autumn Wind", icon: Wind, color: "from-zinc-500/10 to-zinc-600/10" },
  { id: "waves", name: "Ocean Waves", icon: Waves, color: "from-cyan-500/10 to-cyan-600/10" },
  { id: "birds", name: "Forest Birds", icon: Bird, color: "from-green-500/10 to-green-600/10" },
  { id: "fire", name: "Campfire", icon: Flame, color: "from-orange-500/10 to-orange-600/10" },
  { id: "cafe", name: "Cafe Ambience", icon: Coffee, color: "from-brown-500/10 to-brown-600/10" },
  { id: "night", name: "Summer Night", icon: Moon, color: "from-indigo-500/10 to-indigo-600/10" },
];

function SoundTile({ name, icon: Icon, color }: { name: string, icon: any, color: string }) {
  const [isActive, setIsActive] = useState(false);
  const [volume, setVolume] = useState(50);

  return (
    <div 
      className={cn(
        "group relative flex flex-col gap-4 rounded-3xl border p-6 transition-all duration-300 cursor-pointer",
        isActive 
          ? "border-red-500 bg-red-500/5 shadow-[0_0_20px_rgba(220,38,38,0.1)]" 
          : "border-slate-800 bg-slate-900/50 hover:border-slate-700 hover:bg-slate-900"
      )}
      onClick={() => setIsActive(!isActive)}
    >
      <div className="flex items-center justify-between">
        <div className={cn(
          "flex h-12 w-12 items-center justify-center rounded-2xl transition-all",
          isActive ? "bg-red-600 text-white scale-110 shadow-lg" : "bg-slate-800 text-slate-400",
          !isActive && color
        )}>
          <Icon size={24} />
        </div>
        <div className={cn(
          "h-2 w-2 rounded-full transition-all",
          isActive ? "bg-red-500 animate-pulse shadow-[0_0_8px_#dc2626]" : "bg-slate-700"
        )} />
      </div>
      
      <div className="flex flex-col gap-1">
        <h3 className={cn(
          "font-bold transition-colors",
          isActive ? "text-white" : "text-slate-400 group-hover:text-white"
        )}>{name}</h3>
      </div>

      {isActive && (
        <div className="mt-2 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300" onClick={(e) => e.stopPropagation()}>
          <div className="flex items-center gap-3">
            <VolumeX size={14} className="text-slate-500" />
            <div className="h-1.5 flex-1 bg-slate-800 rounded-full overflow-hidden relative cursor-pointer group/slider">
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={volume}
                onChange={(e) => setVolume(parseInt(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              <div 
                className="absolute h-full bg-red-600 transition-all" 
                style={{ width: `${volume}%` }} 
              />
            </div>
            <Volume2 size={14} className="text-slate-500" />
          </div>
        </div>
      )}
    </div>
  );
}

export default function SoundscapesPage() {
  const [isGlobalPlaying, setIsGlobalPlaying] = useState(false);

  return (
    <div className="flex flex-col px-8 pb-10 bg-[#0f172a] min-h-full">
      <header className="pt-8 pb-12 flex items-end justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-bold tracking-[0.2em] text-red-500 uppercase">Ambient Mixer</p>
          <h1 className="text-5xl font-black tracking-tight italic">SOUNDSCAPES</h1>
          <p className="text-slate-400 mt-2 max-w-lg">Mix your favorite ambient sounds to create a personalized environment for relaxation or focus.</p>
        </div>
        
        <div className="flex gap-4">
          <button className="flex h-14 items-center gap-2 rounded-2xl border border-slate-800 bg-slate-900/50 px-6 font-bold hover:bg-slate-900 transition-colors">
            <RefreshCcw size={18} /> Reset
          </button>
          <button 
            onClick={() => setIsGlobalPlaying(!isGlobalPlaying)}
            className="flex h-14 items-center gap-3 rounded-2xl bg-red-600 px-8 font-black text-white transition-all hover:scale-105 active:scale-95 shadow-xl"
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
      <section className="mt-20 pb-20">
        <h2 className="text-2xl font-bold mb-6 italic">Expert Presets</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { name: "Stormy Night", sounds: "Rain + Thunder + Wind" },
            { name: "Summer Forest", sounds: "Birds + Wind + Fire" },
            { name: "Deep Ocean", sounds: "Waves + Soft Rain" },
          ].map((preset) => (
            <div key={preset.name} className="group relative h-48 overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 cursor-pointer flex items-center justify-center">
              <div className="text-3xl font-black italic opacity-10 rotate-[-5deg]">playBOI</div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white">{preset.name}</h3>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{preset.sounds}</p>
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
