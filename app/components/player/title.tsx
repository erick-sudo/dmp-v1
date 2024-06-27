import { ChapterTitle } from "@vidstack/react";
import React from "react";

export function Title() {
  return (
    <span className="inline-block flex-1 overflow-hidden text-ellipsis whitespace-nowrap px-2 text-sm font-medium text-white/70">
      <span className="mr-1 text-cyan-400">|</span>
      <ChapterTitle />
    </span>
  );
}
