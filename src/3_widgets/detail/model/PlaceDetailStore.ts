import { create } from "zustand"
import { Place } from "@entities/Place"

type PlaceDetailStore = {
  place: Place,
  setPlace: (place: Place) => void
}

export const usePlaceDetailStore = create<PlaceDetailStore>((set) => ({
  place: {
    displayName: {
      text: '',
      languageCode: ''
    },
    formattedAddress: '',
    addressComponents: [],
    location: {
      latitude: 0,
      longitude: 0
    }
  },
  setPlace: (place: Place) => set(() => ({ place }))
}))