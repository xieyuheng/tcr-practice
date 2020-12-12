import * as ut from "./ut"

export type Rope = {
  to_string(): string

  substr(start: number, length: number): Rope
}

export const Rope = (the: { to_string(): string }): Rope => ({
  to_string: the.to_string,

  substr(start: number, length: number): Rope {
    return Substr(this, start, length)
  },
})

export const Unit = (str: string) =>
  Rope({
    to_string() {
      return str
    },
  })

export function Substr(rope: Rope, start: number, length: number): Rope {
  return Rope({
    to_string() {
      return rope.to_string().substr(start, length)
    },
  })
}

ut.assert_equal(Unit("abcde").to_string(), "abcde")
ut.assert_equal(Unit("abcde").substr(1, 3).to_string(), Unit("bcd").to_string())
ut.assert_equal(
  Unit("abcde").substr(1, 3).substr(1, 2).to_string(),
  Unit("cd").to_string()
)
