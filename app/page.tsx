import { Play, Heart, MoreHorizontal, Clock3, Flame } from "lucide-react";
import Image from "next/image";

const tracks = [
  { id: 1, title: "Midnight City", artist: "M83", album: "Hurry Up, We're Dreaming", duration: "4:03" },
  { id: 2, title: "Starboy", artist: "The Weeknd", album: "Starboy", duration: "3:50" },
  { id: 3, title: "Blinding Lights", artist: "The Weeknd", album: "After Hours", duration: "3:20" },
  { id: 4, title: "Levitating", artist: "Dua Lipa", album: "Future Nostalgia", duration: "3:23" },
  { id: 5, title: "Save Your Tears", artist: "The Weeknd", album: "After Hours", duration: "3:35" },
];

export default function Home() {
  return (
    <div className="flex-1 overflow-y-auto bg-background">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2070&auto=format&fit=crop"
          alt="Hero Background"
          fill
          className="object-cover opacity-40 grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-primary/20 p-1.5 rounded-full">
              <Flame size={16} className="text-primary animate-pulse" />
            </div>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-primary">Trending Artist</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase mb-6 leading-[0.8]">
            Lana <br /> <span className="text-primary">Del Rey</span>
          </h1>
          <div className="flex items-center gap-4">
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-black uppercase tracking-widest transition-all hover:scale-105 flex items-center gap-2">
              <Play size={20} fill="currentColor" /> Play Now
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white px-8 py-3 rounded-full font-black uppercase tracking-widest transition-all">
              Follow
            </button>
          </div>
        </div>
      </section>

      <div className="p-8 md:p-12 space-y-12 pb-32">
        {/* Popular Tracks */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black italic uppercase tracking-tighter">Popular Tracks</h2>
            <button className="text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
              View All
            </button>
          </div>
          <div className="space-y-1">
            {tracks.map((track, i) => (
              <div 
                key={track.id}
                className="group flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all cursor-pointer border border-transparent hover:border-white/5"
              >
                <span className="w-4 text-xs font-bold text-muted-foreground group-hover:text-primary">{i + 1}</span>
                <div className="h-10 w-10 bg-zinc-800 rounded overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <Play size={16} fill="currentColor" className="text-primary" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold truncate group-hover:text-primary transition-colors">{track.title}</p>
                  <p className="text-xs text-muted-foreground truncate">{track.artist}</p>
                </div>
                <p className="hidden md:block text-xs text-muted-foreground w-1/4 truncate">{track.album}</p>
                <div className="flex items-center gap-4">
                  <Heart size={16} className="text-muted-foreground hover:text-primary transition-colors" />
                  <span className="text-xs font-mono text-muted-foreground w-10 text-right">{track.duration}</span>
                  <MoreHorizontal size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Artists Section */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black italic uppercase tracking-tighter">Top Artists</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex flex-col items-center gap-4 group cursor-pointer">
                <div className="relative aspect-square w-full rounded-full overflow-hidden border-2 border-transparent group-hover:border-primary transition-all p-1">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <Image
                      src={`https://images.unsplash.com/photo-${1500000000000 + i * 1000}?q=80&w=400&auto=format&fit=crop`}
                      alt="Artist"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <span className="text-sm font-bold uppercase tracking-widest text-center group-hover:text-primary transition-colors">Artist Name</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
