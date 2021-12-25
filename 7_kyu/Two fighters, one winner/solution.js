function checkForDeath(fighter1, fighter2) {
  if (fighter1.health <= 0) return fighter2.name;
  if (fighter2.health <= 0) return fighter1.name;
}

function declareWinner(fighter1, fighter2, firstAttacker) {
  if (firstAttacker === fighter1.name) {
    while (fighter1.health > 0 && fighter2.health > 0) {
      fighter2.health -= fighter1.damagePerAttack;
      if (checkForDeath(fighter1, fighter2)) return checkForDeath(fighter1, fighter2);
      fighter1.health -= fighter2.damagePerAttack;
      if (checkForDeath(fighter1, fighter2)) return checkForDeath(fighter1, fighter2);
    }
  } else {
    while (fighter1.health > 0 && fighter2.health > 0) {
      fighter1.health -= fighter2.damagePerAttack;
      if (checkForDeath(fighter1, fighter2)) return checkForDeath(fighter1, fighter2);
      fighter2.health -= fighter1.damagePerAttack;
      if (checkForDeath(fighter1, fighter2)) return checkForDeath(fighter1, fighter2);
    }
  }
}
