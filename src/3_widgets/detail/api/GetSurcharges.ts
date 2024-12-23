export async function GetSurcharges(id: string): Promise<string> {

  const response = await fetch(`http://localhost:5062/Surcharge`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (!response.ok) {
    throw new Error('Network response was not okay')
  }

  const data = await response.json()

  console.log(data)

  return 'Surcharges'
}