def mix(s1, s2)
  # filter strings to select only downcase letters
  s1chars = s1.chars.select { |char| ('a'..'z').include?(char) }
  s2chars = s2.chars.select { |char| ('a'..'z').include?(char) }
  # group letters by their frequency in each string
  s1freqs = s1chars.group_by(&:itself).transform_values!(&:size).select { |k, v| v > 1 }
  s2freqs = s2chars.group_by(&:itself).transform_values!(&:size).select { |k, v| v > 1 }
  # merge letters and their frequency into one hash
  merged = {}
  s1freqs.each do |k, v|
    merged[k] = v
  end
  s2freqs.each do |k, v|
    merged[k] = v unless merged[k] && merged[k] > v
  end
  merged = merged.sort_by { |x, y| [ -Integer(y), x ] }.to_h
  # resort the hash
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
  # build the output string
  output = ""
  resorted.each do |pair|
    output += "#{pair[1]}:#{pair[0]}/"
  end
  output.chop
end
