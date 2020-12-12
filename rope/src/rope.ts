import * as ut from "./ut"

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

ut.assert_equal(Rope("abc").to_string(), "abc")
ut.assert_equal(Rope("abcde").to_string(), "abcde")


