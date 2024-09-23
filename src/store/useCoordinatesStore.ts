import create from "zustand";
import { persist } from "zustand/middleware";

interface CoordinatesState {
  coordinates: {
    latitude: number;
    longitude: number;
  };
  setCoordinates: (latitude: number, longitude: number) => void;
}

const persistedState = persist<CoordinatesState>(
  (set) => ({
    coordinates: {
      latitude: 0,
      longitude: 0,
    },
    setCoordinates: (latitude, longitude) =>
      set(() => ({
        coordinates: { latitude, longitude },
      })),
  }),
  {
    name: "coordinates",
  },
);

const useCoordinatesStore = create(persistedState);

export default useCoordinatesStore;
