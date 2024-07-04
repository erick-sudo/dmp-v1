"use client";
import React from "react";
import SocialMediaLinks from "../social-media-links";

export function HeroSection() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="">
          <div className="p-4">
            <div className="text-5xl md:text-6xl xl:text-7xl text-white font-extrabold py-6">
              <span className="text-cyan-500">Unleashing Creativity</span>&nbsp;
              <span>in the Heart of the Desert</span>
            </div>
            <div className="text-white text-lg max-w-lg mt-6">
              Stream, Watch and Download Quality Entertainment Content that
              suits you.
            </div>
            <div className="mt-4">
              <button className="cyan-hover bg-cyan-500 py-3 min-w-64 rounded group flex gap-2 justify-center">
                <span>Dicover Now</span>
                <span className="inline-block transition-transform group-hover:translate-x-4 motion-reduce:transform-none">
                  -&gt;
                </span>
              </button>
            </div>
          </div>
        </div>
        <div></div>
        <div className="flex justify-end p-4 gap-4">
          <SocialMediaLinks />
        </div>
      </div>
    </div>
  );
}
