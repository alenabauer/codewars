def sum_pairs(ints, s)
  cons = ints.each_cons(2).to_a
  i = 0
  while i < cons.length
    return cons[i] if cons[i][0] + cons[i][1] == s
    i += 1
  end
  combinations = ints.combination(2).to_a
  i = 0
  while i < combinations.length
    return combinations[i] if combinations[i][0] + combinations[i][1] == s
    i += 1
  end
end

print sum_pairs([10, 5, 2, 3, 7, 5], 10)
