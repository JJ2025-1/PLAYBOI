"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  Home, 
  Search, 
  Library, 
  Plus, 
  Heart, 
  PlaySquare,
  Music,
  User,
  Smartphone,
  Waves
} from "lucide-react";

const navItems = [
  { name: "Home", icon: Home, href: "/" },
  { name: "Search", icon: Search, href: "/search" },
  { name: "Devices", icon: Smartphone, href: "/devices" },
  { name: "Soundscapes", icon: Waves, href: "/soundscapes" },
  { name: "Watch", icon: PlaySquare, href: "/watch" },
  { name: "My music", icon: Music, href: "/my-music" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-[260px] flex-col bg-black border-r border-white/5 shadow-2xl z-20">
      {/* Logo Section */}
      <div className="p-10">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 flex items-center justify-center">
             <img 
               src="/logo.png" 
               alt="playBOI Logo" 
               className="w-full h-full object-contain drop-shadow-[0_0_12px_rgba(220,38,38,0.6)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-[-5deg]"
             />
          </div>
          <span className="text-3xl font-black italic tracking-tighter text-white group-hover:text-red-600 transition-colors duration-500">playBOI</span>
        </Link>
      </div>
      
      {/* Navigation */}
      <nav className="flex flex-col px-6 gap-2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "flex items-center gap-4 px-6 py-4 rounded-[20px] text-xs font-black uppercase tracking-widest transition-all duration-300",
              pathname === item.href 
                ? "bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.3)]" 
                : "text-zinc-600 hover:text-white hover:bg-zinc-900/50"
            )}
          >
            <item.icon size={18} className={cn("transition-transform duration-300 group-hover:scale-110", pathname === item.href ? "text-white" : "")} />
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Playlists */}
      <div className="mt-12 px-10 flex flex-col gap-6">
        <h3 className="text-[10px] font-black text-zinc-800 uppercase tracking-[0.3em]">Collections</h3>
        
        <button className="flex items-center gap-4 text-zinc-600 hover:text-white transition-all text-xs font-black uppercase tracking-widest group">
          <div className="w-8 h-8 rounded-xl bg-zinc-900 flex items-center justify-center group-hover:bg-red-600 transition-colors shadow-lg">
            <Plus size={16} strokeWidth={3} />
          </div>
          <span>Create</span>
        </button>
        
        <button className="flex items-center gap-4 text-zinc-600 hover:text-white transition-all text-xs font-black uppercase tracking-widest group">
          <div className="w-8 h-8 rounded-xl bg-zinc-900 flex items-center justify-center group-hover:bg-red-600 transition-colors shadow-lg">
            <Heart size={16} strokeWidth={3} />
          </div>
          <span>Favourites</span>
        </button>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Footer / Settings */}
      <div className="p-6 border-t border-white/5 bg-zinc-950/20">
        <button className="flex items-center gap-4 w-full px-4 py-3 rounded-xl text-zinc-600 hover:text-white hover:bg-zinc-900/50 transition-all text-xs font-black uppercase tracking-widest">
          <User size={18} />
          <span>Profile</span>
        </button>
      </div>
    </div>
  );
}
