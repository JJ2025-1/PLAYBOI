import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

const Sidebar = dynamic(() => import("@/components/Sidebar").then((mod) => mod.Sidebar), {
  ssr: true,
});

const Player = dynamic(() => import("@/components/Player").then((mod) => mod.Player), {
  ssr: false,
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PLAYBOI | Elevate Your Sound",
  description: "A premium, high-tech music experience built for the modern age.",
};

/**
 * Root layout component that wraps all pages.
 * Provides the main structure including sidebar, main content area, and player.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground selection:bg-primary/30`}
      >
        <div className="flex h-screen overflow-hidden border-4 border-white m-2 rounded-2xl relative">
          <Sidebar />
          <main className="flex-1 flex flex-col min-w-0 relative">
            <div className="flex-1 overflow-y-auto pb-32">
              {children}
            </div>
          </main>
          <Player />
        </div>
      </body>
    </html>
  );
}
