function heroesRegister(heroesInfo) {
  let heroes = [];

  for (let heroStr of heroesInfo) {
    let hero = heroStr.split(" / ");
    let heroName = hero.shift();
    let heroLevel = Number(hero.shift());
    let heroItems = hero;
    let heroObj = {
      Hero: heroName,
      level: heroLevel,
      items: heroItems,
    };
    heroes.push(heroObj);
  }
  heroes.sort((a, b) => {
    return a.level - b.level
  })
  for (let hero of heroes) {
    console.log(`Hero: ${hero.Hero}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items}`);
  }
}

heroesRegister([
  "Isacc / 25 / Apple, GravityGun",

  "Derek / 12 / BarrelVest, DestructionSword",

  "Hes / 1 / Desolator, Sentinel, Antara",
]);
