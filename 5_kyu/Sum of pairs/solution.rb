def sum_pairs(ints, s)
  seen = Hash.new
  for int in ints
    return [s - int, int] if seen.keys.include?(s - int)
    seen[int] = true
  end
  nil
end
