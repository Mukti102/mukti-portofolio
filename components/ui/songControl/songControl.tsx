"use client";
import "./control.css";
import SkipNext from "@/components/shared/SkipNext";
import { FaPlay, FaPause } from "react-icons/fa";
import useActiveSong from "@/hooks/useActiveSong";
import { convertToSecond } from "@/utils/Methods";
import { curentPosition } from "@/utils/Methods";
import { FiLoader } from "react-icons/fi";
import { ChangeEvent, useState } from "react";
import useZustand from "@/hooks/useZustand";

function SongControl() {
  const { playing, duration, togglePlayPause, currentTime, isLoading, seek } =
    useActiveSong();
  const { setActiveSongIndex, activeSongIndex, songs } = useZustand();

  const style = {
    background: `linear-gradient(to right  , white ${curentPosition(
      currentTime,
      duration
    )}%,gray ${curentPosition(currentTime, duration)}%)`,
    // background: "linear-gradient(to right ,  red  50%,white 50%)",
  };

  const sliderSong = (event: ChangeEvent<HTMLInputElement>) => {
    seek(Number(event.target.value));
  };

  const nextSong = () => {
    if (activeSongIndex !== null && activeSongIndex + 1 !== songs.length) {
      setActiveSongIndex(activeSongIndex + 1);
    } else return;
  };

  const prevSong = () => {
    if (activeSongIndex !== null && activeSongIndex !== 0) {
      setActiveSongIndex(activeSongIndex - 1);
    } else return;
  };

  return (
    <div className="flex-1 sm:flex  flex-col gap-1 items-center justify-center h-full">
      <div className="w-full  h-full items-center sm:h-max flex gap-10 sm:justify-center justify-end">
        <button onClick={() => prevSong()} className="sm:inline hidden">
          <SkipNext className="w-[14px] h-[14px] fill-current flip" />
        </button>
        <button
          onClick={() => togglePlayPause()}
          className={`${
            isLoading ? "cursor-not-allowed" : "cursor-pointer"
          } w-7 h-7 text-sm bg-white flex justify-center items-center rounded-full text-black`}
        >
          {isLoading ? <FiLoader /> : playing ? <FaPause /> : <FaPlay />}
        </button>
        <button onClick={() => nextSong()} className="sm:inline hidden">
          <SkipNext className="w-[14px] h-[14px] fill-current " />
        </button>
      </div>
      <div className="sm:flex gap-2 items-center hidden text-[.6rem]">
        <span>{convertToSecond(currentTime)}</span>
        <input
          type="range"
          id="song-bar"
          min={0}
          value={currentTime}
          max={duration}
          onChange={sliderSong}
          style={style}
        />
        <span>{convertToSecond(duration)}</span>
      </div>
    </div>
  );
}

export default SongControl;
