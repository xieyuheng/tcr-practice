import assert from "assert"

export type Rope = {
  str: string
  to_string: () => string
}

export function Rope(str: string): Rope {
  return {
    str,
    to_string: () => str,
  }
}

assert(Rope("abc").to_string() === "abc")
console.log(Rope("abc"))
