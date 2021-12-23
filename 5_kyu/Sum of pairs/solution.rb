def sum_pairs(ints, s)
  seen = Hash.new
  for int in ints
    return [s - int, int] if seen[s - int]
    seen[int] = true
  end
  nil
end
