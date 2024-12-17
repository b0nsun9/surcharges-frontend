import { useQuery } from "react-query"
import { SearchPlaces } from "../api/SearchPlaces"

export const useGetPlacesQuery = (searchText: string, nextPageToken?: string) => {
  return useQuery({
    queryKey: ['places', searchText],
    retry: false,
    queryFn: () => SearchPlaces(searchText, nextPageToken),
    refetchOnWindowFocus: false
  })
}