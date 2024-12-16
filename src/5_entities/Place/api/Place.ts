import { LocalizedText } from "./LocalizedText"
import { AddressComponents } from "./AddressComponents"
import { LatLng } from "./LatLng"

export type Place = {
  displayName: LocalizedText,
  formattedAddress: string,
  addressComponents: AddressComponents[],
  location?: LatLng
}