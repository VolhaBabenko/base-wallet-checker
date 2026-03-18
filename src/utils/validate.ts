export function hasInput(value: string): boolean {
  return value.length > 0
}

export function startsWith0x(value: string): boolean {
  return value.startsWith('0x')
}
