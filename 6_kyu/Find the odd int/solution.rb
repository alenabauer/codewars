def find_it(seq)
  seq.find { |num| seq.count(num).odd? }
end
