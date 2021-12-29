function minValue(values){
  uniq = [...new Set(values)];
  number = uniq.sort((a, b) => a - b).join('');
  return parseInt(number);
}
