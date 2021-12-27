function sortArray(array) {
  let odds = array.filter(num => num % 2 != 0).sort((x, y) => x - y);
  return array.map(num => num % 2 != 0 ? odds.shift() : num);
}
