import * as ut from "./ut"

export function double_string_take(
  left: string,
  right: string,
  start: number,
  end: number
): string {
  const new_left = left.substring(start, end)
  const length = left.length
  const new_right = right.substring(start - length, end - length)
  return new_left.concat(new_right)
}

ut.assert_equal(double_string_take("abc", "def", 2, 5), "cde")
