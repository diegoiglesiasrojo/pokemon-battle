const battleCalculator = (firstPokemonObj, secondPokemonObj) => {
  let lifeFirstPokemon = firstPokemonObj.hp;
  let lifeSecondPokemon = secondPokemonObj.hp;
  let turns = [];
  let winner = "";

  do {
    let isFirstPokemonMoreFast = true;

    if (firstPokemonObj.speed > secondPokemonObj.speed) {
      isFirstPokemonMoreFast = true;
    } else if (firstPokemonObj.speed < secondPokemonObj.speed) {
      isFirstPokemonMoreFast = false;
    } else if (firstPokemonObj.attack > secondPokemonObj.attack) {
      isFirstPokemonMoreFast = true;
    } else if (firstPokemonObj.attack < secondPokemonObj.attack) {
      isFirstPokemonMoreFast = false;
    } else if (Math.random() < 0.5) {
      isFirstPokemonMoreFast = true;
    } else {
      isFirstPokemonMoreFast = false;
    }

    const firstToAttack = isFirstPokemonMoreFast
      ? firstPokemonObj
      : secondPokemonObj;

    const secondToAttack = isFirstPokemonMoreFast
      ? secondPokemonObj
      : firstPokemonObj;

    const firstAttackDamage =
      firstToAttack.attack - secondToAttack.defense > 0
        ? firstToAttack.attack - secondToAttack.defense
        : 1;

    const secondAttackDamage =
      secondToAttack.attack - firstToAttack.defense > 0
        ? secondToAttack.attack - firstToAttack.defense
        : 1;

    const lifeFirstPokemonAfterReceiveAttack = isFirstPokemonMoreFast
      ? lifeFirstPokemon - secondAttackDamage
      : lifeFirstPokemon - firstAttackDamage;

    const lifeSecondPokemonAfterReceiveAttack = isFirstPokemonMoreFast
      ? lifeSecondPokemon - firstAttackDamage
      : lifeSecondPokemon - secondAttackDamage;

    const turn = {
      firstToAttackName: firstToAttack.name,
      secondToAttackName: secondToAttack.name,
      firstAttackDamage,
      secondAttackDamage,
      lifeFirstPokemonAfterReceiveAttack,
      lifeSecondPokemonAfterReceiveAttack,
    };

    lifeFirstPokemon = lifeFirstPokemonAfterReceiveAttack;
    lifeSecondPokemon = lifeSecondPokemonAfterReceiveAttack;
    turns.push(turn);
  } while (lifeFirstPokemon > 0 && lifeSecondPokemon > 0);

  if (lifeFirstPokemon > lifeSecondPokemon) {
    winner = firstPokemonObj.name;
  } else if (lifeFirstPokemon < lifeSecondPokemon) {
    winner = secondPokemonObj.name;
  } else {
    winner = turns[turns.length - 1].firstToAttackName;
  }

  const response = {
    turns,
    winner,
  };
  return response;
};

module.exports = battleCalculator;
