"use client";
import Image from "next/image";
import { playlists } from "@/data/songs";
import useZustand from "@/hooks/useZustand";

function Table() {
  const { setActiveSongIndex, activeSongIndex } = useZustand();
  console.log({ activeSongIndex });
  return (
    <div className="overflow-x-auto mt-5">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="border-none dark:text-slate-400 text-slate-700">
            <th className="w-10">No</th>
            <th>Title</th>
            <th>Date Add</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {playlists.map((item, idx) => (
            <tr
              onClick={() => setActiveSongIndex(idx)}
              className="border-none dark:hover:bg-slate-900 hover:bg-slate-300 cursor-pointer"
            >
              <th>{idx + 1}</th>
              <td className="flex gap-2">
                <span className="overflow-hidden h-14  w-14">
                  <Image
                    src={item.thumbnail}
                    alt="alt"
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </span>
                <div className="flex flex-col justify-center py-1">
                  <h1 className="text-lg font-semibold">{item?.title}</h1>
                  <span className="text-xs dark:text-slate-300 text-slate-700 font-medium">
                    {item?.artis}
                  </span>
                </div>
              </td>
              <td>5 month ago</td>
              <td>{item?.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
