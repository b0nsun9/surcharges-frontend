export async function SearchPlaces(searchText: string, nextPageToken?: string) {

  console.log('searchFor: ', searchText)
  console.log('nextPageToken: ', nextPageToken)

  const body: string = nextPageToken && nextPageToken != ''
    ? JSON.stringify({
      'textQuery': searchText,
      'pageToken': nextPageToken
    })
    : JSON.stringify({
      'textQuery': searchText,
    })

  const response = await fetch('https://places.googleapis.com/v1/places:searchText', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
      'X-Goog-FieldMask': "nextPageToken,places.id,places.displayName,places.formattedAddress,places.addressComponents",
    },
    body: body
  })

  if (!response.ok) {
    throw new Error('Network response was not okay')
  }
  return response.json()
}