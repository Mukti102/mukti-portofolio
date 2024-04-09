import { create } from "zustand";
import { playlists } from "@/data/songs";
import { Isongs } from "@/types/types";

interface Izustand {
  songs: Isongs<string>[];
  activeSongIndex: number | null;
  setActiveSongIndex: (idx: number | null) => void;
}

const useZustand = create<Izustand>((set) => ({
  songs: playlists,
  activeSongIndex: null,
  setActiveSongIndex: (idx) => set(() => ({ activeSongIndex: idx })),
}));

export default useZustand;
