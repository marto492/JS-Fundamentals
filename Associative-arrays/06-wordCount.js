function wordCounter(arr) {
  let myObj = {};

  for (let word of arr) {
    if (word in myObj) {
      myObj[word]++;
    } else {
      myObj[word] = 1;
    }
  }

  let entries = Object.entries(myObj);
  entries.sort((a, b) => b[1] - a[1]);
  let sorted = Object.fromEntries(entries);
  
  for(let word in sorted){
    console.log(`${word} -> ${sorted[word]} times`);
  }
}
wordCounter([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
