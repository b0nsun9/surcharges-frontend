import { AddressComponentsModel } from "./AddressComponentsModel"
import { LatLngModel } from "./LatLngModel"

export type PlaceModel = {
  id: string,
  displayName: string,
  addressComponents: AddressComponentsModel[],
  location: LatLngModel
}