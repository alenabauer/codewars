def sum_pairs(ints, s)
  ints.each_cons(2).detect { |a, b| a + b == s } || ints.combination(2).detect { |a, b| a + b == s }
end
