"use client";
import { useCallback, useEffect, useState } from "react";
import Volume from "./songControl/Volume";
import SongControl from "./songControl/songControl";
import SongControlMobile from "./songControl/songControlMobile";
import useZustand from "@/hooks/useZustand";
import { GrNext } from "react-icons/gr";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

function MusicPlayer() {
  const { activeSongIndex, songs } = useZustand();
  const [currentSong, setCurrentSong] = useState<null | any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [open, setOpen] = useState(false);
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    if (activeSongIndex !== null) {
      setCurrentSong(songs[activeSongIndex]);
      setIsPlaying(true);
    } else {
      setCurrentSong(null);
      setIsPlaying(false);
    }
  }, [activeSongIndex]);

  const initialMusicPlayer = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.2,
      },
    },
    exit: {
      scaleY: 0,
    },
  };

  // Mengatur bahwa inisialisasi render telah selesai setelah komponen pertama kali dirender
  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
    }
  }, []);

  const close = useCallback(() => {
    setOpen(false);
  }, []);

  const Open = useCallback(() => {
    setOpen(true);
  }, []);

  // Mengatur pemutaran lagu hanya saat komponen MusicPlayer pertama kali dirender atau saat musik diubah
  useEffect(() => {
    if (!initialRender) {
      if (isPlaying && open) {
        // Lakukan aksi saat musik dimainkan dan komponen dibuka
      } else if (!isPlaying && !open) {
        // Lakukan aksi saat musik tidak dimainkan dan komponen ditutup
      }
    }
  }, [isPlaying, open]);

  const imageInitialz = {
    initial: {
      transition: {
        delay: 5,
        duration: 0.5,
      },
    },
    animate: {
      transition: {
        delay: 2,
        duration: 0.7,
      },
    },
    exit: {
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <>
      <div
        // onClick={Open}
        className={`${
          activeSongIndex === null ? "hidden" : ""
        } bg-slate-100 shadow-lg dark:bg-slate-900 sm:py-2 py-0 justify-between sm:px-6 pl-0 pr-5 flex dark:text-slate-100 text-black sm:justify-center items-center h-[3rem] sm:h-[4.5rem] fixed z-50 right-0 left-0 bottom-16`}
      >
        <div className="sm:w-[25%] w-[70%] h-full flex gap-2 flex-none">
          <div className="sm:w-14 sm:h-14 w-12 rounded-sm sm:rounded-none h-full">
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
      <AnimatePresence>
        {open && (
          <motion.div
            variants={initialMusicPlayer}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full h-screen origin-bottom overflow-hidden dark:text-white fixed bottom-0 right-0 top-0 left-0 z-[100] px-8 py-3 dark:bg-secondary"
          >
            <button onClick={close} className="rotate-90 text-lg mb-10">
              <GrNext />
            </button>
            <div className="w-full">
              <motion.div
                variants={imageInitialz}
                initial="initialz"
                animate="animated"
                className="w-full h-80 bg-red-300"
              >
                <Image
                  src={currentSong?.thumbnail}
                  alt={currentSong?.title}
                  width={70}
                  height={70}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="mt-10">
                <h1 className="font-[600] text-xl">{currentSong?.title}</h1>
                <p className="text-sm">{currentSong?.artis}</p>
              </div>
              <div className="w-full">
                <SongControlMobile />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default MusicPlayer;
