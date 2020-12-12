import * as ut from "./ut"

// TODO
// - delete
//   - length
// - insert
// - balance

export type Rope = RopeEssential & RopeOps & RopeAPI

export type RopeEssential = {
  to_string(): string
  length: number
}

export type RopeOps = {
  substr(start: number, length: number): Rope
  concat(that: Rope): Rope
}

export type RopeAPI = {
  delete(start: number, length: number): Rope
  length: number
}

export function Rope(the: RopeEssential): Rope {
  return {
    to_string: the.to_string,
    length: the.length,

    substr(start, length) {
      return Substr(this, start, length)
    },

    concat(that) {
      return Concat(this, that)
    },

    delete(start, length) {
      const left = this.substr(0, start)
      const right = this.substr(start + length, this.length - start - length)
      return left.concat(right)
    },
  }
}

export const Unit = (str: string) =>
  Rope({
    to_string() {
      return str
    },

    length: str.length,
  })

export const Substr = (rope: Rope, start: number, length: number) =>
  Rope({
    to_string() {
      return rope.to_string().substr(start, length)
    },

    length,
  })

export const Concat = (left: Rope, right: Rope) =>
  Rope({
    to_string() {
      return left.to_string().concat(right.to_string())
    },

    length: left.length + right.length,
  })

ut.assert_equal(Unit("abcde").to_string(), "abcde")
ut.assert_equal(Unit("abcde").substr(1, 3).to_string(), "bcd")
ut.assert_equal(Unit("abcde").substr(1, 3).substr(1, 2).to_string(), "cd")
ut.assert_equal(Unit("abc").concat(Unit("de")).to_string(), "abcde")

ut.assert_equal(Unit("abcde").length, 5)
ut.assert_equal(Unit("abcde").substr(1, 3).length, 3)
ut.assert_equal(Unit("abc").concat(Unit("de")).length, 5)

ut.assert_equal(Unit("abcde").delete(1, 3).to_string(), "ae")
