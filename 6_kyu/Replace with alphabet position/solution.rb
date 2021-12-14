def alphabet_position(text)
  alphabet = ('a'..'z').to_a
  positions = text.chars.map { |char| alphabet.index(char.downcase) + 1 if alphabet.include?(char.downcase) }
  positions.compact.join(' ')
end
