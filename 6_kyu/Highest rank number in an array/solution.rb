def highest_rank(arr)
  freqs = {}
  arr.each do |num|
    freqs[num] ? freqs[num] += 1 : freqs[num] = 1
  end
  sorted = freqs.sort_by(&:reverse).to_h
  sorted.keys.last.to_i
end
