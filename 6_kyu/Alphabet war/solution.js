function alphabetWar(fight)
{
  const left = {
    'w': 4,
    'p': 3,
    'b': 2,
    's': 1
  };
  const right = {
    'm': 4,
    'q': 3,
    'd': 2,
    'z': 1
  }
  let leftScore = 0;
  let rightScore = 0;
  // bombs explode
  const afterExplosion = [];
  for ([i, char] of [...fight].entries()) {
    if ([...fight][i - 1] === '*' || [...fight][i + 1] === '*' || char === '*') continue;
    afterExplosion.push(char);
  }

  for (char of afterExplosion) {
    if (char === '*') break;

    leftScore += left[char] ? left[char] : 0;
    rightScore += right[char] ? right[char] : 0;
  }
  if (leftScore === rightScore) {
    return "Let's fight again!";
  } else if (leftScore > rightScore) {
    return "Left side wins!";
  } else {
    return "Right side wins!";
  }
}
