"use client";
import { useEffect, useState } from "react";
import Volume from "./songControl/Volume";
import SongControl from "./songControl/songControl";
import useZustand from "@/hooks/useZustand";
import Image from "next/image";

function MusicPlayer() {
  const { activeSongIndex, songs } = useZustand();
  const [currentSong, setCurrentSong] = useState<null | any>(null);

  useEffect(() => {
    if (activeSongIndex !== null) {
      setCurrentSong(songs[activeSongIndex]);
    } else return;
  }, [activeSongIndex]);

  return (
    <div
      className={`${
        activeSongIndex === null ? "hidden" : ""
      } bg-slate-100 shadow-lg dark:bg-slate-900 sm:py-2 py-0 justify-between sm:px-6 pl-0 pr-5 flex dark:text-slate-100 text-black sm:justify-center items-center h-[3.7rem] sm:h-[4.5rem] fixed z-50 right-0 left-0 bottom-0`}
    >
      <div className="sm:w-[25%] w-[70%] h-full flex gap-2 flex-none">
        <div className="sm:w-14 sm:h-14 w-14 rounded-sm sm:rounded-none h-full">
          <Image
            src={currentSong?.thumbnail}
            className="w-full h-full z-50 object-cover"
            width={100}
            height={100}
            alt={currentSong?.title || ""}
          />
        </div>
        <div className="flex text-sm flex-col sm:gap-1 gap-0 justify-center">
          <h1 className="font-semibold sm:text-sm text-xs">
            {currentSong?.title}
          </h1>
          <span className="sm:text-xs text-[.6rem] font-medium">
            {currentSong?.artis}
          </span>
        </div>
      </div>
      <SongControl />
      <Volume />
    </div>
  );
}

export default MusicPlayer;
