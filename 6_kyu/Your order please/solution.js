function order(words){
  if (words.length === 0) return "";
  return words.split(' ').sort((a, b) => parseInt(a.match(/\d/)[0]) - parseInt(b.match(/\d/)[0])).join(' ');
}
