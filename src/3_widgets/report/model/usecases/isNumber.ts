export function isNumber(string: string): boolean {
  return !isNaN(Number(string))
}