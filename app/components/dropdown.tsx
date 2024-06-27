"use client";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Checkbox, Radio } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";
import React, { useState } from "react";

interface DropDownMenuProps {
  title: string;
}

export default function DropDownMenu({ title }: DropDownMenuProps) {
  const [showMenu, setShowMenu] = useState(false);

  const popSprings = useSpring({
    from: {
      opacity: 1,
      translateX: "-100%",
      display: "none",
    },
    to: {
      opacity: showMenu ? 1 : 1,
      translateX: showMenu ? "0%" : "-100%",
      display: "grid",
    },
    // config: { tension: 200, friction: 10 },
  });

  return (
    <div className="text-sm group">
      <div
        onClick={() => setShowMenu(true)}
        className="z-40 flex items-center justify-between gap-2 cyan-hover bg-zinc-700 px-4 py-1 rounded-full cursor-pointer text-zinc-400"
      >
        <span>{title}</span>
        <span>
          <ChevronRightIcon
            className="rotate-90 group-hover:rotate-0 duration-300"
            height={16}
          />
        </span>
      </div>
      <div className="relative overflow-x-hidden">
        <animated.div
          onMouseLeave={() => setShowMenu(false)}
          style={{ ...popSprings }}
          className="absolute border bg-zinc-700/20 backdrop-blur-sm ring-2 ring-zinc-400/20 text-sm z-50 top-0 rounded"
        >
          {new Array(5).fill(0).map((_, idx) => (
            <div key={idx} className="flex items-center w-64">
              <Checkbox
                sx={{
                  margin: 0,
                  color: "rgb(6 182 212)",
                  "&.Mui-checked": {
                    color: "rgb(6 182 212)",
                  },
                }}
                size="small"
              />
              <span className="whitespace-nowrap text-zinc-400">
                Lorem Ipsum
              </span>
            </div>
          ))}
        </animated.div>
      </div>
    </div>
  );
}
