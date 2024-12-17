import { LocalizedTextDTO } from "./LocalizedTextDTO"
import { AddressComponentsDTO } from "./AddressComponentsDTO"
import { LatLngDTO } from "./LatLngDTO"

export type PlaceDTO = {
  id: string,
  displayName: LocalizedTextDTO,
  formattedAddress: string,
  addressComponents: AddressComponentsDTO[],
  location?: LatLngDTO
}