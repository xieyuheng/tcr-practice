import * as ut from "./ut"

export type Rope = {
  to_string: () => string
  substr: (start: number, length: number) => Rope
}

export function Rope(str: string): Rope {
  return {
    to_string: () => str,
    substr: (start, length) => Rope("bcd")
  }
}

// export function Substr(rope: Rope, start: number, length: number): Rope {
//   return {
//     start: number, length: number
//   }
// }

ut.assert_equal(Rope("abc").to_string(), "abc")
ut.assert_equal(Rope("abcde").to_string(), "abcde")
ut.assert_equal(Rope("abcde").substr(1, 3).to_string(), Rope("bcd").to_string())
