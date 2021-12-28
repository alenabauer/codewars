function rowWeights(array){
  const weights = [0, 0];
  array.forEach((el, ind) => {
    ind % 2 === 0 ? weights[0] += el : weights[1] += el;
  })
  return weights;
}
