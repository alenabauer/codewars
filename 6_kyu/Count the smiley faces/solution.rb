def count_smileys(arr)
  smiley_regexp = /[:;][-~]*[)D]/
  smiley_arr = arr.select { |el| el.match(smiley_regexp) && (el.chars.length >= 2 && el.chars.length <= 3) }
  smiley_arr.length
end
