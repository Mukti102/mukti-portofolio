import "./control.css";
import SkipNext from "@/components/shared/SkipNext";
import { FaPlay } from "react-icons/fa";

function SongControl() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center h-full">
      <div className="w-full flex gap-10 justify-center">
        <button className="">
          <SkipNext className="w-[14px] h-[14px] fill-current flip" />
        </button>
        <button className="w-7 h-7 text-sm bg-white flex justify-center items-center rounded-full text-black">
          <FaPlay />
        </button>
        <button>
          <SkipNext className="w-[14px] h-[14px] fill-current " />
        </button>
      </div>
      <div className="">
        <span></span>
        <input type="range" id="song-bar" />
      </div>
    </div>
  );
}

export default SongControl;
