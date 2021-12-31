function high(x){
  const alphabetArr = [...'abcdefghijklmnopqrstuvwxyz'];
  const alphabetObj = {};
  for (const [i, char] of alphabetArr.entries()) alphabetObj[char] = i + 1;
  let words = x.split(' ');
  words = words.map(word => {
    let score = 0;
    for (const char of [...word]) score += alphabetObj[char];
    return [word, score];
  });
  return words.sort ((a, b) => b[1] - a[1])[0][0];
}
