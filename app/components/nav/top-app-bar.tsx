"use client";
import IconButton from "@mui/material/IconButton";
import { Rating, Tooltip } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { LazySearch } from "../search";
import {
  Bars4Icon,
  ChevronLeftIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import SpringModal from "../spring-modal";
import { Documentary } from "@/app/lib/definitions";
import { fetchDocumentaries } from "@/app/lib/data";
import Image from "next/image";
import { useState } from "react";

export function TopAppBar({
  updateDrawer,
  expandSideNav,
}: {
  expandSideNav: boolean;
  updateDrawer: (flag: boolean) => void;
}) {
  const [openSearchModal, setOpenSearchModal] = useState(false);

  return (
    <div className="border-b border-zinc-700/40">
      <div className="flex items-center gap-2 p-2">
        <button
          aria-label="open drawer"
          onClick={() => updateDrawer(!expandSideNav)}
          className="ring-1 p-1 ring-zinc-700 rounded text-zinc-400 cyan-hover"
        >
          {expandSideNav ? (
            <Bars4Icon height={25} />
          ) : (
            <ChevronLeftIcon height={25} />
          )}
        </button>

        <h3 className="p-2 text-cyan-400 font-bold">DMP</h3>

        <div className="flex flex-grow justify-center">
          <div className="">
            <SpringModal
              state={[openSearchModal, setOpenSearchModal]}
              className="w-full md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto"
              anchorContent={
                <span className="block text-zinc-400 rounded-full text-sm px-4 py-2 cyan-hover">
                  Search
                </span>
              }
            >
              <div className="">
                <LazySearch<Documentary>
                  zIndex={6}
                  className="md:ring-1 md:ring-zinc-700/40 md:rounded bg-zinc-700 backdrop-blur-md border border-white/10"
                  placeholder="Search..."
                  viewPortClassName="grid gap-1 max-h-[60vh] vertical-scrollbar"
                  renderItem={(item: Documentary) => (
                    <div className="bg-zinc-950 p-2 rounded flex">
                      <div className="h-12 w-12 relative rounded overflow-hidden">
                        <Image
                          className=""
                          src="/images/poster.jpeg"
                          alt={item.title}
                          fill
                          objectFit="cover"
                        />
                      </div>
                      <div className="flex flex-col flex-grow px-4 text-zinc-600">
                        <h4 className="font-medium">{item.title}</h4>
                        <div className="h-5 text-sm relative w-full">
                          <div className="absolute inset-0 truncate ">
                            {item.description}
                          </div>
                        </div>
                        <div className="flex items-center gap-4 text-xs font-bold">
                          <span className="flex items-center gap-1">
                            <span className="">{item.rating}</span>
                            <Rating
                              sx={{
                                "& .MuiRating-iconFilled": {
                                  color: "rgb(34, 211, 238)",
                                },
                                "& .MuiRating-iconEmpty": {
                                  color: "rgba(34, 211, 238, .5)",
                                },
                              }}
                              size="small"
                              name="read-only"
                              value={item.rating}
                              precision={0.1}
                              max={10}
                              readOnly
                            />
                          </span>
                          <span className="text-zinc-600/80">|</span>
                          <span>{item.genre}</span>
                          <span className="text-zinc-600/80">|</span>
                          <span>{item.year}</span>
                        </div>
                      </div>
                    </div>
                  )}
                  fetchItems={(query) => fetchDocumentaries()}
                  receiveSelection={(selectedItem: Documentary) => {}}
                  childClassName="group text-zinc-700 duration-300"
                >
                  <button
                    onClick={() => setOpenSearchModal(false)}
                    className="md:hidden p-1 m-2 ring-1 bg-zinc-900 rounded ring-zinc-500/20 text-zinc-500 cyan-hover duration-300"
                  >
                    <XMarkIcon height={20} />
                  </button>
                </LazySearch>
              </div>
            </SpringModal>
          </div>
        </div>
        <div>
          <Tooltip title="Account">
            <IconButton onClick={() => {}} sx={{ p: 0 }}>
              <Avatar
                className="border-2 bg-zinc-900 border-zinc-700/40 text-cyan-600"
                alt="Wemy Sharp"
                src="/static/images/avatar/2.jpg"
              />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
