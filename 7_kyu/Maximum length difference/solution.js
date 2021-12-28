function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) return -1;
  sorted1 = a1.map(word => word.length).sort((a,b) => a - b);
  sorted2 = a2.map(word => word.length).sort((a,b) => a - b);
  max1 = Math.abs(sorted1[sorted1.length - 1] - sorted2[0]);
  max2 = Math.abs(sorted2[sorted2.length - 1] - sorted1[0]);
  return max1 > max2 ? max1 : max2;
}
