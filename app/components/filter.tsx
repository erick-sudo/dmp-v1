import React from "react";
import DropDownMenu from "./dropdown";
import { FunnelIcon } from "@heroicons/react/24/outline";

export interface FilterProperty {
  title: string;
}

const properties: FilterProperty[] = [
  {
    title: "Genre",
  },
  {
    title: "Year",
  },
  {
    title: "Rating",
  },
  {
    title: "Quality",
  },
  {
    title: "Recently updated",
  },
];

export default function Filter() {
  return (
    <div className="flex flex-wrap gap-1 p-2">
      {properties.map((property, index) => (
        <DropDownMenu key={index} title={property.title} />
      ))}
      <button className="flex items-center justify-between gap-2 cyan-hover bg-cyan-500 px-4 py-1 rounded-full cursor-pointer text-white text-sm">
        <FunnelIcon height={16} />
        <span>Filter</span>
      </button>
    </div>
  );
}
