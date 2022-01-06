function towerBuilder(nFloors) {
  const tower = [];
  let floor = nFloors;
  let spaces = 0;
  while (floor > 0) {
    tower.unshift(' '.repeat(spaces) + '*'.repeat(2 * floor - 1) + ' '.repeat(spaces));
    floor -= 1;
    spaces += 1;
  }
  return tower;
}
