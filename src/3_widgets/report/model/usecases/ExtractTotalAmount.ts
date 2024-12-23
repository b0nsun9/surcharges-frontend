export function ExtractTotalAmount(text: string): string | null {
  const lowerCased = text.toLowerCase()
  const regex = /(total|total amount|purchase)[\s:]*\$(\d{1,3}(?:,\d{3})*(?:\.\d{2})?)/i
  const match = lowerCased.match(regex)
  return match ? match[2] : null
}