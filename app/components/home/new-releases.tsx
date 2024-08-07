import React from "react";
import { Player } from "../player/Player";

const newReleases = [
  {
    title: "Desert Mysteries",
    description: "A thrilling adventure through the sands.",
    genre: "Thriller",
  },
  {
    title: "Laugh Out Loud",
    description: "A hilarious comedy that will keep you laughing.",
    genre: "Comedy",
  },
  {
    title: "Heartfelt Moments",
    description: "Romantic stories that touch your heart.",
    genre: "Romance",
  },
  {
    title: "Untold Stories",
    description: "Documentaries revealing hidden truths.",
    genre: "Documentary",
  },
];

export default function NewReleases() {
  return (
    <div className="">
      <div className="container mx-auto p-4">
        <div className="py-2 flex justify-between">
          <h4 className="text-lg text-grad">New Releases For You</h4>
          <button className="px-4 text-cyan-400 hover:text-white duration-300">
            View More
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {newReleases.map((release, index) => (
            <div key={index} className="">
              <div className="h-48 relative rounded overflow-hidden">
                <Player src="https://youtu.be/GvOUI0PlloY?feature=shared" />
              </div>
              <div className="p-4">
                <h5 className="text-white text-2xl mb-2">{release.title}</h5>
                <p className="text-gray-400 mb-1">{release.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
