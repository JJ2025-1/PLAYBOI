export const APP_NAME = "PLAYBOI";
export const APP_VERSION = "0.2.0";

export const FEATURED_ARTIST = {
  name: "Lana Del Rey",
  tagline: "Trending Artist",
  image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2070&auto=format&fit=crop",
};

export interface Track {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
  cover: string;
}

export const TRACKS: Track[] = [
  { id: 1, title: "Midnight City", artist: "M83", album: "Hurry Up, We're Dreaming", duration: "4:03", cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=200&auto=format&fit=crop" },
  { id: 2, title: "Starboy", artist: "The Weeknd", album: "Starboy", duration: "3:50", cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=200&auto=format&fit=crop" },
  { id: 3, title: "Blinding Lights", artist: "The Weeknd", album: "After Hours", duration: "3:20", cover: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=200&auto=format&fit=crop" },
  { id: 4, title: "Levitating", artist: "Dua Lipa", album: "Future Nostalgia", duration: "3:23", cover: "https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=200&auto=format&fit=crop" },
  { id: 5, title: "Save Your Tears", artist: "The Weeknd", album: "After Hours", duration: "3:35", cover: "https://images.unsplash.com/photo-1514525253344-99a4217a2240?q=80&w=200&auto=format&fit=crop" },
  { id: 6, title: "Born To Die", artist: "Lana Del Rey", album: "Born To Die", duration: "4:46", cover: "https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=200&auto=format&fit=crop" },
  { id: 7, title: "After Hours", artist: "The Weeknd", album: "After Hours", duration: "6:01", cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=200&auto=format&fit=crop" },
  { id: 8, title: "Sweater Weather", artist: "The Neighbourhood", album: "I Love You.", duration: "4:00", cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=200&auto=format&fit=crop" },
];

export interface Artist {
  id: number;
  name: string;
  image: string;
}

export const ARTISTS: Artist[] = [
  { id: 1, name: "The Weeknd", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop" },
  { id: 2, name: "Lana Del Rey", image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=400&auto=format&fit=crop" },
  { id: 3, name: "Dua Lipa", image: "https://images.unsplash.com/photo-1514525253344-99a4217a2240?q=80&w=400&auto=format&fit=crop" },
  { id: 4, name: "M83", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=400&auto=format&fit=crop" },
  { id: 5, name: "Arctic Monkeys", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=400&auto=format&fit=crop" },
  { id: 6, name: "Tame Impala", image: "https://images.unsplash.com/photo-1514525253344-99a4217a2240?q=80&w=400&auto=format&fit=crop" },
  { id: 7, name: "The Neighbourhood", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=400&auto=format&fit=crop" },
  { id: 8, name: "Frank Ocean", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=400&auto=format&fit=crop" },
];
