import "./control.css";
import { IoVolumeMediumSharp } from "react-icons/io5";

function Volume() {
  return (
    <div className="w-[25%] flex items-center justify-end">
      <div className="flex gap-3 items-center">
        <span>
          <IoVolumeMediumSharp />
        </span>
        <input type="range" id="volume-bar" />
      </div>
    </div>
  );
}

export default Volume;
