"use client";
import Image from "next/image";
import { playlists } from "@/data/songs";
import useZustand from "@/hooks/useZustand";

function Table() {
  const { setActiveSongIndex, songs, activeSongIndex } = useZustand();
  const songIndex = activeSongIndex !== null ? activeSongIndex : 0;
  return (
    <div className="overflow-y-auto  h-full mt-5">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="border-none dark:text-slate-300 text-slate-700">
            <th className="w-10 sm:table-cell hidden">No</th>
            <th className=" w-[40%]">Title</th>
            <th className=" text-center sm:table-cell hidden">Album</th>
            <th className="sm:text-center text-end  sm:w-32 w-[2%]">Time</th>
          </tr>
        </thead>
        <tbody>
          {playlists.map((item, idx) => {
            const isActive = item.title === songs[songIndex].title;
            return (
              <tr
                onClick={() => setActiveSongIndex(idx)}
                className="border-none dark:hover:bg-slate-800 hover:bg-slate-300 hover:dark:bg-opacity-50 bg-opacity-40 cursor-pointer"
              >
                <th className="sm:table-cell hidden">{idx + 1}</th>
                <td className="flex sm:gap-2 gap-3 w-[90%]">
                  <span className="overflow-hidden sm:h-14  sm:w-14 h-12 w-12">
                    <Image
                      src={item.thumbnail}
                      alt="alt"
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </span>
                  <div className="flex flex-col gap-[.10rem] justify-center py-1">
                    <h1
                      className={`sm:text-lg text-sm font-semibold ${
                        isActive ? "text-primary" : ""
                      }`}
                    >
                      {item?.title}
                    </h1>
                    <span className="sm:text-xs text-[.7rem] dark:text-slate-300 text-slate-700 font-medium">
                      {item?.artis}
                    </span>
                  </div>
                </td>
                <td className="text-center sm:table-cell text-[.7rem] hidden">
                  {item.artis}
                </td>
                <td className="sm:text-center text-end sm:text-sm text-[.6rem]">
                  {item?.duration}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
