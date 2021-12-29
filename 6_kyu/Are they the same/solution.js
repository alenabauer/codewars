function comp(array1, array2){
  if (array1 == null || array2 == null) return false;
  sorted1 = array1.sort((a, b) => a - b);
  sorted2 = array2.sort((a, b) => a - b);
  for (let i = 0; i < sorted1.length; i++) {
    if (sorted1[i] != Math.sqrt(sorted2[i])) return false;
  }
  return true;
}
