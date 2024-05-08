"use client";
import "./controlMobile.css";
import SkipNext from "@/components/shared/SkipNext";
import { FaPlay, FaPause } from "react-icons/fa";
import useActiveSong from "@/hooks/useActiveSong";
import { convertToSecond } from "@/utils/Methods";
import { curentPosition } from "@/utils/Methods";
import { FiLoader } from "react-icons/fi";
import { ChangeEvent, useState } from "react";
import useZustand from "@/hooks/useZustand";

function SongControlMobile() {
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
    <div className="flex-1 w-full  mt-10 sm:flex  flex-col gap-1 items-center justify-center h-full">
      <div className="flex w-full flex-col gap-1 items-center text-[.6rem]">
        <div className="w-full">
          <input
            type="range"
            id="song-bar"
            min={0}
            value={currentTime}
            max={duration}
            onChange={sliderSong}
            style={style}
          />
        </div>
        <div className="w-full flex justify-between">
          <span>{convertToSecond(currentTime)}</span>
          <span>{convertToSecond(duration)}</span>
        </div>
      </div>
      <div className="w-full mt-5 h-full items-center sm:h-max flex gap-10 sm:justify-center justify-center">
        <button onClick={() => prevSong()} className="sm:inline">
          <SkipNext className="w-[15px] h-[15px] fill-current flip" />
        </button>
        <button
          onClick={() => togglePlayPause()}
          className={`${
            isLoading ? "cursor-not-allowed" : "cursor-pointer"
          } w-12 h-12 text-lg bg-white flex z-50 justify-center items-center rounded-full text-black`}
        >
          {isLoading ? <FiLoader /> : playing ? <FaPause /> : <FaPlay />}
        </button>
        <button onClick={() => nextSong()} className="sm:inline">
          <SkipNext className="w-[15px] h-[15px] fill-current " />
        </button>
      </div>
    </div>
  );
}

export default SongControlMobile;
