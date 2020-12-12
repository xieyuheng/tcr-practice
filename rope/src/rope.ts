import * as ut from "./ut"

export type Rope = {
  to_string(): string
} & RopeOp

export type RopeOp = {
  substr(start: number, length: number): Rope
  concat(that: Rope): Rope
}

export function Rope(the: { to_string(): string }): Rope {
  return {
    to_string: the.to_string,

    substr(start, length) {
      return Substr(this, start, length)
    },

    concat(that) {
      return Concat(this, that)
    }
  }
}

export const Unit = (str: string) =>
  Rope({
    to_string() {
      return str
    },
  })

export const Substr = (rope: Rope, start: number, length: number) =>
  Rope({
    to_string() {
      return rope.to_string().substr(start, length)
    },
  })

export const Concat = (left: Rope, right: Rope) =>
  Rope({
    to_string() {
      return left.to_string().concat(right.to_string())
    },
  })

ut.assert_equal(Unit("abcde").to_string(), "abcde")

ut.assert_equal(Unit("abcde").substr(1, 3).to_string(), Unit("bcd").to_string())

ut.assert_equal(
  Unit("abcde").substr(1, 3).substr(1, 2).to_string(),
  Unit("cd").to_string()
)

ut.assert_equal(
  Unit("abc").concat(Unit("de")).to_string(),
  Unit("abcde").to_string()
)
