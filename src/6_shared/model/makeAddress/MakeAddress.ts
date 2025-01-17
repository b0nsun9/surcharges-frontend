import { AddressComponentsDTO } from "@entities/place"

export function MakeAddress(addressComponents: AddressComponentsDTO[]) {
  return addressComponents
    .slice(0, 4)
    .map((addressComponent: any) => addressComponent.longText)
    .join(' ')
}