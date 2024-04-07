"use client";
import Volume from "./songControl/Volume";
import SongControl from "./songControl/songControl";
import useZustand from "@/hooks/useZustand";

function MusicPlayer() {
  const { activeSongIndex, songs } = useZustand();
  return (
    <div
      className={`${
        activeSongIndex === null ? "hidden" : ""
      } bg-slate-900 py-2 px-6 flex dark:text-slate-100 text-slate-900 justify-center items-center h-[4.5rem] fixed z-50 right-0 left-0 bottom-0`}
    >
      <div className="w-[25%] flex gap-2 flex-none">
        <div className="w-14 h-14 bg-purple-600"></div>
        <div className="flex text-sm flex-col gap-1 justify-center">
          <h1 className="font-semibold text-sm">Seberapa Pantas</h1>
          <span className="text-xs font-medium">Asrtis {activeSongIndex}</span>
        </div>
      </div>
      <SongControl />
      <Volume />
    </div>
  );
}

export default MusicPlayer;
