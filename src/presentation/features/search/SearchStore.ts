import { create } from "zustand"

type SearchStore = {
  searchText: string,
  nextPageToken: string,
  places: [],
  setSearchText: (searchText: string) => void,
  setNextPageToken: (nextPageToken: string) => void
  setPlaces: (places: []) => void
  flushData: () => void
  reset: () => void
}

export const useSearchStore = create<SearchStore>((set) => ({
  searchText: '',
  nextPageToken: '',
  places: [],
  setSearchText: (searchText: string) => set(() => ({ searchText })),
  setNextPageToken: (nextPageToken: string) => set(() => ({ nextPageToken })),
  setPlaces: (newPlaces: []) => set((state) => ({ places: [...state.places, ...newPlaces]})),
  flushData: () => set(() => ({ nextPageToken: '', places: []})),
  reset: () => set(() => ({ searchText: '', nextPageToken: '', places: []}))
}))