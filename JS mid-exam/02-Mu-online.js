function muOnline(input) {
  let roomsArr = input.split("|");
  let health = 100;
  let bitcoins = 0;

  for (let i = 0; i < roomsArr.length; i++) {
    let currentRoom = roomsArr[i].split(" ");
    let command = currentRoom[0];
    let action = Number(currentRoom[1]);
    if (command == `chest`) {
      console.log(`You found ${action} bitcoins.`);
      bitcoins += action;
    } else if (command == `potion`) {
        let healedFor = 0
      if (health + action >= 100) {
        healedFor = action;
        healedFor = 100 - health
        health = 100;
        
        console.log(`You healed for ${healedFor} hp.`);
        console.log(`Current health: ${health} hp.`);
      } else {
        console.log(`You healed for ${action} hp.`);
        health += action
        console.log(`Current health: ${health} hp.`);
      }
    } else {
      health -= action;
      if (health <= 0) {
        console.log(`You died! Killed by ${command}.`);
        console.log(`Best room: ${i + 1}`);
        return;
      } else {
        console.log(`You slayed ${command}.`);
      }
    }
  }
  console.log("You've made it!");
  console.log(`Bitcoins: ${bitcoins}`);
  console.log(`Health: ${health}`);
}
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
