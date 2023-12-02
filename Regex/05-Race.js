function race(input) {
  let names = input.shift().split(", ");
  let result = {};

  names.forEach((element) => {
    result[element] = 0;
  });

  let patternNames = /[A-Za-z]/g;
  let patternDistance = /\d/g;

  let command = input.shift();

  while (command != "end of race") {
    let matchName = command.match(patternNames).join("");
    let distance = command
      .match(patternDistance)
      .map(Number)
      .reduce((acc, val) => acc + val);

    if (matchName in result) {
      result[matchName] += distance;
    } else if (names.includes(matchName)) {
      result[matchName] = distance;
    }

    command = input.shift();
  }

  let sortedResults = Object.entries(result).sort((a, b) => b[1] - a[1])
  console.log(`1st place: ${sortedResults[0][0]}`)
  console.log(`2nd place: ${sortedResults[1][0]}`);
  console.log(`3rd place: ${sortedResults[2][0]}`);
}
race([
  "George, Peter, Bill, Tom",

  "G4e@55or%6g6!68e!!@ ",

  "R1@!3a$y4456@",

  "B5@i@#123ll",

  "G@e54o$r6ge#",

  "7P%et^#e5346r",

  "T$o553m&6",

  "end of race",
]);
