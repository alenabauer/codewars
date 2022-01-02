function stringTransformer(str) {
  // split the string into words and reverse
  str = str.split(' ').reverse().join(' ');
  // change lowercase to uppercase and vice versa
  return [...str].map(char => char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()).join('');
}
