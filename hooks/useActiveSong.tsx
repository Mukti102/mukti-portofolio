import { useEffect, useState } from "react";
import useZustand from "./useZustand";
import { useAudioPlayer } from "react-use-audio-player";

function useActiveSong() {
  const { activeSongIndex, setActiveSongIndex, songs } = useZustand();
  const [currentTime, setCurrentTime] = useState(0);
  const {
    load,
    playing,
    isLoading,
    togglePlayPause,
    duration,
    getPosition,
    mute,
    volume,
    setVolume,
    seek,
  } = useAudioPlayer();

  useEffect(() => {
    if (activeSongIndex !== null) {
      load(songs[activeSongIndex]?.song, {
        autoplay: true,
        onend() {
          if (activeSongIndex + 1 === songs.length) return;
          setActiveSongIndex(activeSongIndex + 1);
        },
        initialMute: false,
        initialVolume: 0.2,
      });
    } else return;
  }, [activeSongIndex]);

  useEffect(() => {
    addEventListener("timeupdate", getPosition);
    return () => removeEventListener("timeupdate", getPosition);
  }, []);

  useEffect(() => {
    const getCurrentPosition = (): number => {
      return getPosition();
    };

    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentPosition);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return {
    isLoading,
    playing,
    duration,
    mute,
    togglePlayPause,
    currentTime,
    setVolume,
    volume,
    seek,
  };
}

export default useActiveSong;
