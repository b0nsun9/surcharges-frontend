import { Location } from "./Location"

export type Place = {
  id: string,
  displayName: string,
  address: string,
  location?: Location
}