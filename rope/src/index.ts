import assert from "assert"

export type Rope = {
  str: string
  to_string: string
}

export function Rope(str: string): Rope {
  return {
    str,
    to_string: str,
  }
}
