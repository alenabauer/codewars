var capitals = function (word) {
	const list = [];
  for(let i = 0; i < word.length; i++) {
    if (word[i] == word[i].toUpperCase()) list.push(i);
  }
  return list;
};
