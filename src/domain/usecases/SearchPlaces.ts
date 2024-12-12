export default async function SearchPlaces(searchText: string) {

  console.log('searchFor: ', searchText)
  
  const response = await fetch('https://places.googleapis.com/v1/places:searchText', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
      'X-Goog-FieldMask': "places.id,places.displayName,places.formattedAddress",
    },
    body: JSON.stringify({
      'textQuery': searchText,
    })
  })

  if (!response.ok) {
    throw new Error('Network response was not okay')
  }
  return response.json()
}