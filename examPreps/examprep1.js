function theImitation(input) {
  let message = input.shift();

  while (input[0] != "Decode") {
    let [operation, cmd1, cmd2] = input.shift().split("|");

    switch (operation) {
      case `ChangeAll`:
        let alteredText = message.split("");
        for (let i = 0; i < alteredText.length; i++) {
          if (alteredText[i] == cmd1) {
            alteredText[i] = cmd2;
          }
        }
        message = alteredText.join("");
        break;
      case `Insert`:
        let firstHalf = message.slice(0, cmd1);
        let secondHalf = message.slice(cmd1);
        message = firstHalf + cmd2 + secondHalf;
        // console.log(message);
        break;
      case `Move`:
        let textArr = message.split("");
        for (let i = 0; i < cmd1; i++) {
          let removedElement = textArr.shift();
          textArr.push(removedElement);
        }
        message = textArr.join("");
        // console.log(message);

        break;
    }
  }
  console.log(`The decrypted message is: ${message}`);
}
theImitation(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
theImitation([
  "owyouh",
  "Move|2",
  "Move|3",
  "Insert|3|are",
  "Insert|9|?",
  "Decode",
]);
