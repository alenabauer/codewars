ALPHABET = ('a'..'z').to_a

def pangram?(string)
  ALPHABET.all? { |char| string.downcase.chars.include?(char) }
end
