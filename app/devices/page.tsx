"use client";

import { useState } from "react";
import { 
  Battery, 
  Settings, 
  Bluetooth, 
  Music, 
  Check,
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
    <div className="flex flex-col px-8 pb-10 bg-[#0f172a] min-h-full">
      <header className="pt-8 pb-12">
        <h1 className="text-4xl font-black tracking-tight italic">MY DEVICES</h1>
      </header>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Device Info Card */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="relative overflow-hidden rounded-[32px] bg-slate-900 border border-slate-800 p-8 shadow-2xl">
            <div className="flex justify-between items-start mb-12">
              <div className="flex flex-col gap-1">
                <span className="flex items-center gap-2 text-xs font-bold text-red-500 uppercase tracking-widest">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                  Connected
                </span>
                <h2 className="text-2xl font-bold">playBOI Earbuds Pro</h2>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-slate-800 px-3 py-1.5 border border-white/5">
                <Battery size={16} className="text-green-500" />
                <span className="text-xs font-bold">85%</span>
              </div>
            </div>

            <div className="relative aspect-square w-full max-w-[300px] mx-auto mb-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-red-600/10 rounded-full blur-[80px]" />
              <div className="relative z-10 w-48 h-48 rounded-3xl bg-slate-800 border border-slate-700 flex items-center justify-center shadow-2xl">
                 <div className="text-4xl font-black italic opacity-20 rotate-[-12deg]">playBOI</div>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-slate-800 py-4 font-bold border border-slate-700 hover:bg-slate-700 transition-colors">
                <Settings size={18} /> Settings
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-slate-800 py-4 font-bold border border-slate-700 hover:bg-slate-700 transition-colors">
                <Info size={18} /> Manual
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 border border-red-500/20">
                <Bluetooth size={24} />
              </div>
              <div>
                <p className="font-bold text-sm">Firmware Update</p>
                <p className="text-xs text-slate-500">Version 2.4.1 available</p>
              </div>
            </div>
            <button className="text-xs font-bold text-white px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 transition-colors">
              UPDATE
            </button>
          </div>
        </div>

        {/* EQ Controls */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="rounded-[32px] border border-slate-800 bg-slate-900 p-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <Music size={24} className="text-red-500" />
                <h2 className="text-xl font-bold">Sound Profiles</h2>
              </div>
              <button className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-white transition-colors">
                <Sliders size={16} /> Custom EQ
              </button>
            </div>

            {/* EQ Visualization */}
            <div className="h-40 flex items-end gap-1 mb-10 px-4">
              {[30, 45, 60, 40, 70, 85, 60, 45, 30, 40, 55, 45, 30].map((height, i) => (
                <div 
                  key={i} 
                  className="flex-1 bg-gradient-to-t from-red-600/20 to-red-600 rounded-full transition-all duration-500" 
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
                      ? "border-red-500 bg-red-500/5" 
                      : "border-slate-800 bg-slate-900/50 hover:border-slate-700"
                  )}
                >
                  <div className="flex flex-col gap-1">
                    <span className={cn("font-bold", selectedEQ === profile.id ? "text-red-500" : "text-white")}>
                      {profile.name}
                    </span>
                    <span className="text-xs text-slate-500">{profile.description}</span>
                  </div>
                  {selectedEQ === profile.id && <Check size={18} className="text-red-500" />}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
