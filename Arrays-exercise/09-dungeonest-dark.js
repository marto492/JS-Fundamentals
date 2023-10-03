function dungeonestDark(roomsFromInput) {
  let rooms = roomsFromInput[0].split("|");
  let health = 100;
  let coins = 0;
  let roomCount = 1;

  for (let i = 0; i < rooms.length; i++) {
    let room = rooms[i].split(` `);
    if (room[0] == "potion") {
      if (Number(room[1]) + health > 100) {
        console.log(`You healed for ${100-health} hp.`);
        health = 100;
        roomCount++;
      } else {
        health += Number(room[1]);
        console.log(`You healed for ${room[1]} hp.`);
        roomCount++;
      }
      console.log(`Current health: ${health} hp.`);
    } else if (room[0] == "chest") {
      coins += Number(room[1]);
      console.log(`You found ${room[1]} coins.`);
      roomCount++;
    } else {
      health -= Number(room[1]);
      if (health > 0) {
        console.log(`You slayed ${room[0]}.`);
        roomCount++;
      } else {
        console.log(`You died! Killed by ${room[0]}.`);
        console.log(`Best room: ${roomCount}`);
        return;
      }
    }
  }
  console.log(`You've made it!`);
  console.log(`Coins: ${coins}`);
  console.log(`Health: ${health}`);
}
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
