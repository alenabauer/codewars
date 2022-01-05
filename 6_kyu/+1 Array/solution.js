function upArray(arr){
  if (arr.length == 0 || !arr.every(num => num < 10 && num >= 0)) return null;
  if (arr.every(num => num === 9)) return [1, ...new Array(arr.length).fill(0)];
  let index = arr.length - 1 - arr.slice().reverse().findIndex(num => num < 9);
  arr[index] += 1;
  index += 1;
  while (index < arr.length) {
    arr[index] = 0;
    index += 1;
  }
  return arr;
}
