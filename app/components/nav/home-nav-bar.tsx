"use client";

import { ButtonGroup } from "../ButtonGroup";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSpring, animated } from "@react-spring/web";
import Link from "next/link";
import React, { useState } from "react";
import { NavButton } from "./nav-button";
import { usePathname } from "next/navigation";

const exploreTabs = [
  { title: "Documentaries", path: "content/documentaries" },
  { title: "Music", path: "content/music" },
  { title: "Live Stream", path: "content/live" },
  { title: "Podcasts", path: "content/podcasts" },
  { title: "Shows", path: "content/projects" },
  { title: "Comedy", path: "content/comedy" },
];

export function NavBar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const pathName = usePathname();

  const popUpSprings = useSpring({
    from: {
      opacity: 0,
      translateX: "100%",
    },
    to: {
      opacity: openDrawer ? 1 : 0,
      translateX: openDrawer ? "0%" : "100%",
    },
    config: { tension: 200, friction: 10 },
  });

  return (
    <>
      <div className="sticky top-0 bg-zinc-950/0 backdrop-blur z-50">
        <div className="flex text-white text-sm items-start container mx-auto gap-4 p-2">
          <div className="flex items-center gap-2">
            <div className="">
              <div className="text-2xl font-extrabold">
                <span className="text-cyan-400">Desert</span> Mamba
              </div>
              <div className=" font-thin text-xl">Productions</div>
            </div>
          </div>

          {/* Large Screen */}
          <div className="hidden lg:flex justify-end gap-2 flex-grow">
            <ButtonGroup
              items={["Home"]}
              onChange={(newIndex) => {}}
              activeIndex={0}
            >
              {/* <DropDownMenu title="Explore">
              {exploreTabs.map((tab, index) => (<MenuItem>
              </MenuItem>))}
            </DropDownMenu> */}
              <button className="px-6 py-2 button rounded-full">Search</button>
              <button className="px-6 py-2 button rounded-full">Login</button>
            </ButtonGroup>
          </div>

          {/* Small Screen */}
          <div className="flex-grow lg:hidden flex justify-end">
            <button
              onClick={() => setOpenDrawer(true)}
              className="ring-1 p-1 ring-zinc-700 rounded text-zinc-400 cyan-hover"
            >
              <Bars4Icon className="" height={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Small Screen Popup */}
      <animated.div
        style={{ ...popUpSprings }}
        className="lg:hidden fixed z-50 flex flex-col border-zinc-800 bg-white/10 backdrop-blur-md ring-1 ring-white/30 top-1.5 bottom-1.5 right-1.5 rounded"
      >
        <div className="flex justify-between items-center p-2 w-72">
          <h3 className="p-2 text-cyan-400 font-bold">DMP</h3>
          <button
            onClick={() => setOpenDrawer(false)}
            className="p-1 ring-1 rounded ring-zinc-500/20 text-zinc-500 cyan-hover duration-300"
          >
            <XMarkIcon className="" height={20} />
          </button>
        </div>
        <div className="grid gap-2 p-2">
          {exploreTabs.map((tab, index) => {
            const active = pathName.startsWith(`/${tab.path}`);
            return (
              <Link key={index} href={tab.path}>
                <NavButton
                  className={`rounded w-full  ${
                    active
                      ? "bg-zinc-950/50 ring-1 ring-inset ring-cyan-400/50 hover:bg-black duration-300"
                      : "cyan-hover"
                  }`}
                  text={tab.title}
                  active={active}
                  hideText={false}
                />
              </Link>
            );
          })}
        </div>
        <div className="p-1 flex flex-col justify-end flex-grow">
          <button className="rounded w-full p-2 button">Login</button>
        </div>
      </animated.div>

      {/* <div className="container mx-auto px-4 mt-2">
        <BreadCrumbs />
      </div> */}
    </>
  );
}
