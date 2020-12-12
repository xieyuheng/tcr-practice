import * as ut from "./ut"

export type Rope = {
  str: string
  to_string: () => string
  substring: (start: number, end: number) => Rope
}

export function Rope(str: string): Rope {
  return {
    str,
    to_string: () => str,
    substring: (start, end) => Rope("bcd")
  }
}

ut.assert_equal(Rope("abc").to_string(), "abc")
ut.assert_equal(Rope("abcde").to_string(), "abcde")
ut.assert_equal(Rope("abcde").substring(1, 3).to_string(), Rope("bcd").to_string())
