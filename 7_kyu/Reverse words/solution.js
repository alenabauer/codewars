function reverseWords(str) {
  const arr = str.split(" ");
  const newArr = [];
  arr.forEach((word) => {
    newArr.push(word.split("").reverse().join(""));
  })
  return newArr.join(" ")
}
