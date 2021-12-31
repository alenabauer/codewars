function kebabize(str) {
  let kebab = [...str].map((char, ind) => char === char.toUpperCase() ? `-${char.toLowerCase()}` : char );
  let output = kebab.filter(char => char.match(/[a-z]/)).join('');
  if (output.charAt(0) == '-') output = output.substring(1);
  return output;
}
