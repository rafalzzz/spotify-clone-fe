import { create } from 'zustand';

type TUseMusicPlayerStore = {
  isPlaying: boolean;
  duration: number;
  currentTrackUrl: string;
  changeSong: (trackUrl: string) => void;
  togglePlay: () => void;
  setDuration: (duration: number) => void;
};

export const useMusicPlayerStore = create<TUseMusicPlayerStore>((set) => ({
  isPlaying: false,
  duration: 0,
  currentTrackUrl: '',
  changeSong: (trackUrl: string) =>
    set(() => ({ isPlaying: true, currentTrackUrl: trackUrl, duration: 0 })),
  togglePlay: () => set(({ isPlaying }) => ({ isPlaying: !isPlaying })),
  setDuration: (duration: number) => set(() => ({ duration: duration })),
}));
