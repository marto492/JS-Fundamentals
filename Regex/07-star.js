function star(input) {
  let msgsCount = input.shift();
  let starPattern = /[star]/gi;
  let decryptedMsgs = [];
  let infoPattern =
    /@(?<name>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<type>[AD])![^@\-!:>]*->(?<soldiers>\d+)/;
  let attackedPlanets = [];
  let destroyedPlanets = [];
  for (let i = 0; i < msgsCount; i++) {
    let match = input[i].match(starPattern);
    if (match) {
      let matchCount = match.length;
      let decryptedMsg = "";

      for (let char of input[i]) {
        let code = char.charCodeAt();
        code -= matchCount;
        let decryptedChar = String.fromCharCode(code);
        decryptedMsg += decryptedChar;
      }
      decryptedMsgs.push(decryptedMsg);
    }
  }

  for (let msg of decryptedMsgs) {
    let match = msg.match(infoPattern);
    if (match) {
      let { name, type } = match.groups;

      if (type == "A") {
        attackedPlanets.push(name);
      } else {
        destroyedPlanets.push(name);
      }
    }
  }

  attackedPlanets.sort((a, b) => a.localeCompare(b));
  destroyedPlanets.sort((a, b) => a.localeCompare(b));

  console.log(`Attacked planets: ${attackedPlanets.length}`);
  attackedPlanets.forEach((planet) => {
    console.log(`-> ${planet}`);
  });

  console.log(`Destroyed planets: ${destroyedPlanets.length}`);
  destroyedPlanets.forEach((planet) => {
    console.log(`-> ${planet}`);
  });
}
star(["2", "STCDoghudd4=63333$D$0A53333", "EHfsytsnhf?8555&I&2C9555SR"]);
