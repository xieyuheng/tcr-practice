import * as ut from "./ut"

export function double_substring(
  left: string,
  right: string,
  start: number,
  end: number
): string {
  const new_left = left.substring(start, end)
  const new_right = right.substring(start - left.length, end - left.length)
  return new_left.concat(new_right)
}

ut.assert_equal(double_substring("abc", "def", 2, 5), "cde")
