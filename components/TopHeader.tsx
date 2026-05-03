"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Settings, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function TopHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Browse", href: "/" },
    { name: "My Music", href: "/my-music" },
    { name: "Radio", href: "/radio" },
  ];

  return (
    <header className="sticky top-0 z-50 h-14 w-full bg-background/80 backdrop-blur-md text-foreground flex items-center px-4 md:px-0 border-b-2 border-white">
      {/* Logo Section */}
      <div className="flex h-full w-full md:w-52 items-center justify-between md:justify-center border-r-2 border-white bg-black/5">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center p-1 group-hover:scale-110 transition-transform">
            <span className="font-black italic text-xs tracking-tighter text-white">P</span>
          </div>
          <span className="text-xl font-black italic tracking-tighter group-hover:text-primary transition-colors">PLAYBOI</span>
        </Link>
        <button 
          className="md:hidden p-1 hover:bg-white/10 rounded text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Navigation Tabs - Desktop */}
      <nav className="hidden md:flex h-full items-center">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "h-full px-8 flex items-center text-xs font-black uppercase tracking-widest border-r border-border transition-all relative",
              pathname === item.href || (item.name === "Browse" && pathname === "/")
                ? "bg-primary/10 text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-primary" 
                : "text-muted-foreground hover:text-foreground hover:bg-white/5"
            )}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Right Icons */}
      <div className="hidden md:flex h-full items-center ml-auto px-6 gap-6">
        <div className="relative group">
          <Search size={18} className="text-muted-foreground group-hover:text-primary transition-colors cursor-pointer" />
        </div>
        <Settings size={18} className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer" />
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-14 left-0 right-0 bg-background border-b border-border p-4 md:hidden flex flex-col gap-4 animate-in slide-in-from-top duration-200">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              href={item.href}
              className="text-lg font-bold hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex gap-6 mt-2 pt-4 border-t border-border">
            <Search size={24} className="text-muted-foreground" />
            <Settings size={24} className="text-muted-foreground" />
          </div>
        </div>
      )}
    </header>
  );
}
