function phonePook(arr) {
  let myObj = {};
  for (let entry of arr) {
    let tokens = entry.split(" ");
    let [name, number] = tokens;
    myObj[name] = number;
  }

  for (let entry in myObj) {
    console.log(`${entry} -> ${myObj[entry]}`);
  }
}
phonePook([
  "Tim 0834212554",

  "Peter 0877547887",

  "Bill 0896543112",

  "Tim 0876566344",
]);
