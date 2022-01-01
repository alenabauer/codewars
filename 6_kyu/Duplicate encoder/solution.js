// Solution A

// function duplicateEncode(word){
//   let output = '';
//   const freqs = {};
//   for (const char of [...word.toLowerCase()]) {
//     freqs[char] ? freqs[char] += 1 : freqs[char] = 1;
//   }
//   for (const char of [...word.toLowerCase()]) {
//     output += freqs[char] > 1 ? ')' : '(';
//   }
//   return output;
// }

// Solution B
function duplicateEncode(word){
  const lowerCase = word.toLowerCase();
  let output = '';
  for (const char of [...lowerCase]) {
    output += lowerCase.indexOf(char) === lowerCase.lastIndexOf(char) ? '(' : ')';
  }
  return output;
}
