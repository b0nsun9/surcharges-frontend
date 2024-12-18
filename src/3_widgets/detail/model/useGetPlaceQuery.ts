import { useQuery } from "react-query"
import { GetPlaceDetail } from '../api/GetPlaceDetail'

export const useGetPlaceQuery = (placeId: string) => {
  return useQuery({
    queryKey: ['place', placeId],
    retry: false,
    queryFn: () => GetPlaceDetail(placeId),
    refetchOnWindowFocus: false
  })
}