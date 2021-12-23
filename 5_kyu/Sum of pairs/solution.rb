def sum_pairs(ints, s)
  combinations = ints.each_cons(2).to_a
  other_combinations = ints.combination(2).to_a - combinations
  combinations.find { |x| x.sum == s } || other_combinations.find { |x| x.sum == s }
end
