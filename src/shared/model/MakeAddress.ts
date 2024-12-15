export default function MakeAddress(addressComponents: [], formattedAddress?: string) {

  if (formattedAddress) {
    return formattedAddress
  }

  return addressComponents
    .slice(0, 4)
    .map((addressComponent: any) => addressComponent.longText)
    .join(' ')
}