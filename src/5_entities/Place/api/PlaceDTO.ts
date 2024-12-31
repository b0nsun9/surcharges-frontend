import { LocalizedTextDTO } from "./LocalizedTextDTO"
import { AddressComponentsDTO } from "./AddressComponentsDTO"
import { LatLngDTO } from "./LatLngDTO"

import { Timestamp } from "firebase/firestore"

export type PlaceDTO = {
  id: string,
  displayName: LocalizedTextDTO,
  addressComponents: AddressComponentsDTO[],
  location?: LatLngDTO
  rate?: number,
  reportedDate?: Timestamp
}