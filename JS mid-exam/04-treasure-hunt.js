function treasureHunt(input) {
  let initialChest = input[0].split("|");
  input.shift();

  for (let i = 0; i < input.length; i++) {
    let command = input[i].split(` `);
    if (command[0] == "Loot") {
      command.shift();
      for (let loot = 0; loot < command.length; loot++) {
        if (!initialChest.includes(command[loot])) {
          initialChest.unshift(command[loot]);
        }
      }
    } else if (command[0] == "Drop") {
      let droppedElement = initialChest.splice(command[1], 1);
      initialChest.push(droppedElement[0]);
    } else if (command[0] == "Steal") {
      let stolen = -Math.abs(command[1]);
      let stolenItems = initialChest.splice(stolen, command[1]);
      console.log(stolenItems.join(", "));
    }
  }
  if (initialChest.length == 0) {
    console.log(`Failed treasure hunt.`);
  } else if{
    let sum = 0;
    for (let treasure of initialChest) {
      sum += treasure.length;
    }
    let avg = (sum / initialChest.length).toFixed(2);
    console.log(`Average treasure gain: ${avg} pirate credits.`);
  }
}
treasureHunt(["Diamonds|Silver|Shotgun|Gold", "Loot Silver Medals Coal", "Drop -1", "Drop 1", "Steal 6", "Yohoho!"])