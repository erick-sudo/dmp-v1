import { ChevronRightIcon, PlusIcon } from "@heroicons/react/24/outline";
import React from "react";
import ControlledAccordions from "../controlled-accordions";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import NewReleases from "./new-releases";

const library = [
  {
    summary: <span className="text-white">Documentaries</span>,
    details: (
      <div>
        <NewReleases />
      </div>
    ),
  },
  {
    summary: <span className="text-white">Health</span>,
    details: <div></div>,
  },
  {
    summary: <span className="text-white">Shows</span>,
    details: <div></div>,
  },
  {
    summary: <span className="text-white">Comedies</span>,
    details: <div></div>,
  },
];

export default function FeaturesSection() {
  return (
    <div className="">
      <div className="container mx-auto p-4">
        <div className="flex flex-col gap-6">
          <h4 className="text-4xl text-white font-bold">
            <span className="text-cyan-400">Stream your</span>&nbsp; favorite TV
            Shows
          </h4>
          <p className="text-gray-200 text-lg">
            Discover a world of entertainment at your fingertips with Desert
            Mamba Productions. Dive into our extensive library of high-quality
            TV shows, featuring captivating storytelling, stunning visuals, and
            diverse genres to suit every taste. Whether you&apos;re a fan of
            gripping dramas, thrilling mysteries, heartwarming comedies, or
            insightful documentaries, we&apos;ve got something for everyone.
          </p>
          <div>
            <button className="cyan-hover bg-cyan-500 py-3 min-w-64 rounded group flex gap-2 justify-center">
              <span>Browse All TV Shows</span>
              <span className="inline-block transition-transform group-hover:translate-x-4 motion-reduce:transform-none">
                -&gt;
              </span>
            </button>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="container mx-auto p-4">
        <div className="flex flex-col gap-6">
          <h4 className="text-4xl text-white font-bold">
            <span className="text-cyan-400">Watch and Download content</span>
            &nbsp;from different Genres
          </h4>
          <p className="text-gray-200 text-lg">
            Dive into our diverse library, discover new favorites, and take your
            entertainment experience to the next level.
          </p>

          <div className="border border-cyan-500 rounded-lg">
            <ControlledAccordions
              itemClassName="border-b border-b-cyan-500"
              items={library}
              expandIcon={
                <ChevronDownIcon
                  height={36}
                  className="text-white expandIconWrapper bg-gradient-to-tr from-cyan-400 rounded-full p-1"
                />
              }
            />
          </div>
          <div>
            <button className="cyan-hover bg-cyan-500 py-3 min-w-64 rounded group flex gap-2 justify-center">
              <span>Browse All Genres</span>
              <span className="inline-block transition-transform group-hover:translate-x-4 motion-reduce:transform-none">
                -&gt;
              </span>
            </button>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="container mx-auto p-4">
        <div className="flex flex-col gap-6">
          <h4 className="text-4xl font-bold">
            <span className="text-white">Stream your&nbsp;</span>
            <span className="text-cyan-400">
              favorite Music Artists and Albums
            </span>
          </h4>
          <p className="text-gray-200 text-lg">
            One-click streaming of your favorite music artists from various
            genre music types and other diversities of the music industry.
          </p>
          <div>
            <button className="cyan-hover bg-cyan-500 py-3 min-w-64 rounded group flex gap-2 justify-center">
              <span>Browse All Music</span>
              <span className="inline-block transition-transform group-hover:translate-x-4 motion-reduce:transform-none">
                -&gt;
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
