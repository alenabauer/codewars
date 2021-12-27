def mix(s1, s2)
  s1chars = s1.chars.select { |char| ('a'..'z').include?(char) }
  s2chars = s2.chars.select { |char| ('a'..'z').include?(char) }
  s1freqs = s1chars.group_by(&:itself).transform_values!(&:size).select { |k, v| v > 1 }
  s2freqs = s2chars.group_by(&:itself).transform_values!(&:size).select { |k, v| v > 1 }
  merged = {}
  s1freqs.each do |k, v|
    merged[k] = v
  end
  s2freqs.each do |k, v|
    merged[k] = v unless merged[k] && merged[k] > v
  end
  merged = merged.sort_by { |x, y| [ -Integer(y), x ] }.to_h
  hash = {}
  merged.each do |k, v|
    new_value = ""
    if (s1freqs[k] && s2freqs[k] && s1freqs[k] > s2freqs[k]) || (!s2freqs[k])
      new_value = 1
    elsif (s1freqs[k] && s2freqs[k] && s1freqs[k] < s2freqs[k]) || (!s1freqs[k])
      new_value = 2
    else
      new_value = 61
    end
    new_key = k * v
    hash[new_key] = new_value
  end
  resorted = hash.sort_by { |k, v| [-k.chars.size, v] }.to_a.map { |sub| sub[1] == 61 ? [sub[0], sub[1].chr] : sub }
  output = ""
  resorted.each do |pair|
    output += "#{pair[1]}:#{pair[0]}/"
  end
  return output.chop
end

s1="Are the kids at home? aaaaa fffff"
s2="Yes they are here! aaaaa fffff"

print mix(s1, s2)
