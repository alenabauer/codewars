function countSmileys(arr) {
  const smileyRegexp = /[:;][-~]*[)D]/;
  const smileyArr = arr.filter(el => el.match(smileyRegexp) && (el.length >= 2 && el.length <= 3));
  return smileyArr.length;
}
