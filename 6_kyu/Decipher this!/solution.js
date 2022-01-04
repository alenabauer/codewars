function decipherThis(str) {
  const words = str.split(' ');
  const decoded = [];
  words.forEach(word => {
    const code = Number(word.match(/\d+/)[0]);
    const firstLetter = String.fromCharCode(code);
    const letters = word.replace(/\d+/, firstLetter);
    decoded.push(swap(letters, 1, letters.length - 1))
  })
  return decoded.join(' ');
};

function swap(arr, first, last){
    arr = arr.split('');
    var temp = arr[first];
    arr[first] = arr[last];
    arr[last] = temp;
    arr = arr.join("").toString();
    return arr;
}
