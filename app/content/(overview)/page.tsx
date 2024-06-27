import React from "react";
import { Player, PlayerCard } from "../../components/player/Player";

export default function Page() {
  return (
    <div className="grid p-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
      {new Array(36).fill(0).map((_, idx) => (
        <PlayerCard key={idx} className="" title="" />
      ))}
    </div>
  );
}
