import { create } from "zustand";

interface FlightState {
  origin: string;
  destination: string;
  passengers: number;

  setSearchData: (
    origin: string,
    destination: string,
    passengers: number
  ) => void;
}

export const useFlightStore = create<FlightState>((set) => ({
  origin: "",
  destination: "",
  passengers: 1,

  setSearchData: (origin, destination, passengers) =>
    set({
      origin,
      destination,
      passengers,
    }),
}));