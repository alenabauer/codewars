function getSum(a, b) {
  let min = 0;
  let max = 0;
  if (a > b) {
    max = a;
    min = b;
  } else {
    max = b;
    min = a;
  }
  let sum = 0;
  let i = min;
  while (i <= max) {
    sum += i;
    i += 1;
  }
  return sum;
}
