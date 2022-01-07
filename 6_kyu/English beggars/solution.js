function beggars(values, n){
  let beggar = 1;
  const output = [];
  while (beggar <= n) {
    let filtered = n === 1? values : values.filter( (num, index) => {
      if (beggar === n) {
        return (index + 1) % n === 0;
      }
      else {
        return (index + 1) % n === beggar;
      }
    });
    output.push(filtered.length === 0 ? 0 : filtered.reduce((a, b) => a + b));
    beggar += 1;
  }
  return output;
}
