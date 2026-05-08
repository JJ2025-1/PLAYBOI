"use client";

import dynamic from "next/dynamic";

const Player = dynamic(() => import("@/components/Player").then((mod) => mod.Player), {
  ssr: false,
});

export function PlayerWrapper() {
  return <Player />;
}
