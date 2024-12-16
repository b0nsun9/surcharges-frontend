import { AddressComponents } from "@entities/Place"

export function MakeAddress(addressComponents: AddressComponents[], formattedAddress?: string) {

  if (formattedAddress) {
    return formattedAddress
  }

  return addressComponents
    .slice(0, 4)
    .map((addressComponent: any) => addressComponent.longText)
    .join(' ')
}