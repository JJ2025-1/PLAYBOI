import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TopHeader } from "@/components/TopHeader";
import { RightSidebar } from "@/components/RightSidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PLAYBOI | Modern Audio Experience",
  description: "A high-fidelity music discovery application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f0f0f0] text-[#333333] selection:bg-[#e67e22]/30 overflow-hidden`}
      >
        <div className="flex h-screen flex-col">
          <TopHeader />
          <div className="flex flex-1 overflow-hidden">
            <main className="flex-1 overflow-y-auto custom-scrollbar">
              {children}
            </main>
            <RightSidebar />
          </div>
        </div>
      </body>
    </html>
  );
}
