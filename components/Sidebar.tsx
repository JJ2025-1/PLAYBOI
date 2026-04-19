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
  Radio, 
  LayoutGrid,
  History,
  Wind,
  Smartphone
} from "lucide-react";

const navItems = [
  { name: "Home", icon: Home, href: "/" },
  { name: "Search", icon: Search, href: "/search" },
  { name: "Discovery", icon: Radio, href: "/discover" },
  { name: "Soundscapes", icon: Wind, href: "/soundscapes" },
  { name: "Devices", icon: Smartphone, href: "/devices" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-[280px] flex-col bg-black p-2 gap-2">
      {/* Top Section */}
      <div className="rounded-lg bg-[#121212] px-4 py-5 flex flex-col gap-5">
        <div className="flex items-center gap-3 px-2 mb-2">
          <h1 className="text-2xl font-black tracking-tight text-white italic">PLAYBOI</h1>
        </div>
        
        <nav className="flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-4 px-2 py-1 text-base font-bold transition-all duration-300",
                pathname === item.href ? "text-white" : "text-[#b3b3b3] hover:text-white"
              )}
            >
              <item.icon size={26} strokeWidth={pathname === item.href ? 3 : 2} />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Library Section */}
      <div className="flex-1 rounded-lg bg-[#121212] overflow-hidden flex flex-col">
        <div className="px-6 py-4 flex items-center justify-between shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
          <button className="flex items-center gap-3 text-[#b3b3b3] hover:text-white transition-colors font-bold">
            <Library size={26} />
            Your Library
          </button>
          <div className="flex gap-2">
            <button className="p-1.5 text-[#b3b3b3] hover:text-white hover:bg-white/10 rounded-full transition-all">
              <Plus size={20} />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-2 py-2">
          {/* Playlist Categories */}
          <div className="flex flex-col gap-1">
            <button className="flex items-center gap-4 rounded-md p-3 hover:bg-[#1a1a1a] transition-all group">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-br from-[#450af5] to-[#c4efd9] text-white">
                <Heart size={20} fill="currentColor" />
              </div>
              <div className="flex flex-col items-start truncate">
                <span className="text-sm font-bold text-white">Liked Songs</span>
                <span className="text-xs text-[#b3b3b3]">Playlist • 142 songs</span>
              </div>
            </button>

            <button className="flex items-center gap-4 rounded-md p-3 hover:bg-[#1a1a1a] transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#282828] text-[#b3b3b3]">
                <Plus size={24} />
              </div>
              <div className="flex flex-col items-start truncate">
                <span className="text-sm font-bold text-white">Create Playlist</span>
                <span className="text-xs text-[#b3b3b3]">Click to add new</span>
              </div>
            </button>

            {[1, 2, 3, 4, 5].map((i) => (
              <button key={i} className="flex items-center gap-4 rounded-md p-3 hover:bg-[#1a1a1a] transition-all group text-left">
                <div className="h-12 w-12 rounded-md bg-[#282828] bg-[url('https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=100&auto=format&fit=crop')] bg-cover" />
                <div className="flex flex-col truncate">
                  <span className="text-sm font-bold text-white truncate">My Playlist #{i}</span>
                  <span className="text-xs text-[#b3b3b3]">Playlist • User</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
