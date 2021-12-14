def first_non_repeating_letter(s)
  freqs = s.chars.group_by { |v| v.downcase }
  if s.empty? || s.chars.all? { |char| freqs[char.downcase].size > 1 }
    ""
  else
    s.chars.select { |char| freqs[char.downcase].size == 1 }.first
  end
end
