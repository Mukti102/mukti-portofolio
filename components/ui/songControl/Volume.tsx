import "./control.css";
import { IoVolumeMediumSharp, IoVolumeMute } from "react-icons/io5";
import useActiveSong from "@/hooks/useActiveSong";
import { ChangeEvent, useEffect, useState } from "react";

function Volume() {
  const { volume, setVolume, mute } = useActiveSong();
  const [isMuted, setIsmuted] = useState(false);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(event.target.value));
  };

  const style = {
    background: `linear-gradient(to right,green ${volume * 100}% ,gray ${
      volume * 100
    }%)`,
  };

  useEffect(() => {
    isMuted ? mute(true) : mute(false);
  }, [isMuted]);

  return (
    <div className="w-[25%] sm:flex hidden items-center justify-end">
      <div className="flex gap-3 items-center">
        <span onClick={() => setIsmuted(!isMuted)}>
          {isMuted ? <IoVolumeMute /> : <IoVolumeMediumSharp />}
        </span>
        <input
          step={0.1}
          value={volume}
          max={1}
          onChange={handleChange}
          type="range"
          id="volume-bar"
          style={style}
        />
      </div>
    </div>
  );
}

export default Volume;
