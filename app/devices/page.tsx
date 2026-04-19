"use client";

import { useState } from "react";
import { 
  Battery, 
  Settings, 
  Bluetooth, 
  Music, 
  Check,
  ChevronRight,
  Info,
  Sliders
} from "lucide-react";
import { cn } from "@/lib/utils";

const eqProfiles = [
  { id: "signature", name: "Soundcore Signature", description: "Balanced sound for most genres" },
  { id: "bassup", name: "BassUp™", description: "Deep, powerful bass boost" },
  { id: "acoustic", name: "Acoustic", description: "Clear vocals and instruments" },
  { id: "treble", name: "Treble Booster", description: "Enhanced high frequencies" },
];

export default function DevicesPage() {
  const [selectedEQ, setSelectedEQ] = useState("signature");

  return (
    <div className="flex flex-col px-8 pb-10">
      <header className="pt-8 pb-12">
        <h1 className="text-4xl font-black tracking-tight">MY DEVICES</h1>
      </header>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Device Info Card */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#1c1c21] to-[#0a0a0c] border border-border p-8 shadow-2xl">
            <div className="flex justify-between items-start mb-12">
              <div className="flex flex-col gap-1">
                <span className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  Connected
                </span>
                <h2 className="text-2xl font-bold">Liberty 4 Pro</h2>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-zinc-800/50 px-3 py-1.5 border border-white/5">
                <Battery size={16} className="text-green-500" />
                <span className="text-xs font-bold">85%</span>
              </div>
            </div>

            <div className="relative aspect-square w-full max-w-[300px] mx-auto mb-8">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[80px]" />
              <img 
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop" 
                alt="Liberty 4 Pro" 
                className="relative z-10 w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              />
            </div>

            <div className="flex gap-4">
              <button className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-muted/40 py-4 font-bold border border-border hover:bg-muted/60 transition-colors">
                <Settings size={18} /> Settings
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-muted/40 py-4 font-bold border border-border hover:bg-muted/60 transition-colors">
                <Info size={18} /> Manual
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-muted/20 p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20">
                <Bluetooth size={24} />
              </div>
              <div>
                <p className="font-bold">Firmware Update</p>
                <p className="text-xs text-muted-foreground">Version 2.4.1 available</p>
              </div>
            </div>
            <button className="text-xs font-bold text-primary px-4 py-2 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors">
              UPDATE
            </button>
          </div>
        </div>

        {/* EQ Controls */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="rounded-[32px] border border-border bg-card p-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <Music className="text-primary" />
                <h2 className="text-xl font-bold">Sound Profiles</h2>
              </div>
              <button className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground">
                <Sliders size={16} /> Custom EQ
              </button>
            </div>

            {/* EQ Visualization */}
            <div className="h-40 flex items-end gap-1 mb-10 px-4">
              {[30, 45, 60, 40, 70, 85, 60, 45, 30, 40, 55, 45, 30].map((height, i) => (
                <div 
                  key={i} 
                  className="flex-1 bg-gradient-to-t from-primary/20 to-primary rounded-full transition-all duration-500" 
                  style={{ height: `${selectedEQ === 'bassup' ? height + (i < 5 ? 20 : -10) : height}%` }}
                />
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {eqProfiles.map((profile) => (
                <button
                  key={profile.id}
                  onClick={() => setSelectedEQ(profile.id)}
                  className={cn(
                    "flex items-center justify-between rounded-2xl p-5 border transition-all text-left",
                    selectedEQ === profile.id 
                      ? "border-primary bg-primary/5 shadow-[0_0_15px_rgba(0,209,255,0.05)]" 
                      : "border-border bg-muted/20 hover:border-border/80"
                  )}
                >
                  <div className="flex flex-col gap-1">
                    <span className={cn("font-bold", selectedEQ === profile.id ? "text-primary" : "text-foreground")}>
                      {profile.name}
                    </span>
                    <span className="text-xs text-muted-foreground">{profile.description}</span>
                  </div>
                  {selectedEQ === profile.id && <Check size={18} className="text-primary" />}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-border bg-muted/20 p-8 flex flex-col gap-6">
            <h3 className="font-bold">Other Devices</h3>
            <div className="flex gap-4">
              {[
                { name: "Motion X600", image: "https://images.unsplash.com/photo-1608156639585-340c71835941?q=80&w=200&auto=format&fit=crop" },
                { name: "Space One", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=200&auto=format&fit=crop" },
              ].map((device) => (
                <div key={device.name} className="flex flex-col items-center gap-3 group cursor-pointer">
                  <div className="h-20 w-20 rounded-2xl bg-zinc-800 border border-border overflow-hidden p-2 flex items-center justify-center transition-transform group-hover:scale-105">
                    <img src={device.image} alt={device.name} className="w-full h-full object-contain opacity-60 group-hover:opacity-100" />
                  </div>
                  <span className="text-xs font-bold text-muted-foreground group-hover:text-foreground">{device.name}</span>
                </div>
              ))}
              <button className="flex flex-col items-center gap-3 group">
                <div className="h-20 w-20 rounded-2xl border-2 border-dashed border-border flex items-center justify-center text-muted-foreground group-hover:border-primary group-hover:text-primary transition-colors">
                  <Bluetooth size={24} />
                </div>
                <span className="text-xs font-bold text-muted-foreground group-hover:text-foreground">Add New</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
