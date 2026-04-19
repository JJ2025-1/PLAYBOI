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
  User
} from "lucide-react";

const navItems = [
  { name: "Home", icon: Home, href: "/" },
  { name: "Search", icon: Search, href: "/search" },
  { name: "Watch", icon: PlaySquare, href: "/watch" },
  { name: "My music", icon: Music, href: "/my-music" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-[240px] flex-col bg-[#0f172a] border-r border-slate-800/50">
      {/* Logo Section */}
      <div className="p-6">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 flex items-center justify-center">
             {/* Red Rabbit SVG */}
             <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-600 fill-current">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#dc2626"/>
                <path d="M9 7L7 4L5 7V11C5 12.1046 5.89543 13 7 13C8.10457 13 9 12.1046 9 11V7Z" fill="#dc2626"/>
                <path d="M19 7L17 4L15 7V11C15 12.1046 15.8954 13 17 13C18.1046 13 19 12.1046 19 11V7Z" fill="#dc2626"/>
                <circle cx="8" cy="10" r="1.5" fill="white"/>
                <circle cx="16" cy="10" r="1.5" fill="white"/>
                <path d="M12 15C10 15 8.5 14 8.5 14" stroke="white" strokeWidth="1" strokeLinecap="round"/>
                <path d="M12 15C14 15 15.5 14 15.5 14" stroke="white" strokeWidth="1" strokeLinecap="round"/>
             </svg>
          </div>
          <span className="text-xl font-black italic tracking-tighter text-white">playBOI</span>
        </Link>
      </div>
      
      {/* Navigation */}
      <nav className="flex flex-col px-4 gap-1">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "flex items-center gap-4 px-3 py-2 rounded-md text-sm font-medium transition-colors",
              pathname === item.href 
                ? "bg-slate-800 text-white" 
                : "text-slate-400 hover:text-white hover:bg-slate-800/50"
            )}
          >
            <item.icon size={20} />
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Playlists */}
      <div className="mt-8 px-6 flex flex-col gap-4">
        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">My playlists</h3>
        
        <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium">
          <Plus size={18} />
          <span>Create</span>
        </button>
        
        <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium">
          <Heart size={18} />
          <span>Favourites</span>
        </button>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Footer / Settings */}
      <div className="p-4 border-t border-slate-800/50">
        <button className="flex items-center gap-3 w-full px-3 py-2 text-slate-400 hover:text-white transition-colors text-sm">
          <User size={20} />
          <span>Profile</span>
        </button>
      </div>
    </div>
  );
}
