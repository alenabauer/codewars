function highestRank(arr){
  const freqs = {};
  for (const num of arr) {
    freqs[num] ? freqs[num] += 1 : freqs[num] = 1;
  }
  const sorted = Object.entries(freqs).sort((a, b) => a[1] - b[1]);
  return Number(sorted.pop()[0]);
}
