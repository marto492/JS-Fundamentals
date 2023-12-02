function activationKeys(input) {
  let rawKey = input.shift();
  
  let operations = input.shift();

  while (operations !== "Generate") {
    let arguments = operations.split(">>>");
    let command = arguments.shift();

    switch (command) {
      case `Contains`:
        if (rawKey.includes(arguments[0])) {
          console.log(`${rawKey} contains ${arguments[0]}`);
        } else {
          console.log(`Substring not found!`);
        }
        break;
      case `Flip`:
        let startIndex = arguments[1];
        let endIndex = arguments[2];
        let casing = arguments[0];
        let subString = rawKey.slice(startIndex, endIndex);
        let alteredstring = "";
        if (casing == "Upper") {
          alteredstring = subString.toUpperCase();
          rawKey = rawKey.replace(subString, alteredstring);
        } else {
          alteredstring = subString.toLowerCase();
          rawKey = rawKey.replace(subString, alteredstring);
        }
        console.log(rawKey);
        break;
        case `Slice`:
            let beginSlice = arguments[0];
            let endSlice = arguments[1];
            let sliced = rawKey.slice(beginSlice, endSlice);
            rawKey = rawKey.replace(sliced, "");
            console.log(rawKey);
            break;
    }

    operations = input.shift();
  }
  console.log(`Your activation key is: ${rawKey}`);
}
activationKeys([
  "134softsf5ftuni2020rockz42",

  "Slice>>>3>>>7",

  "Contains>>>-rock",

  "Contains>>>-uni-",

  "Contains>>>-rocks",

  "Flip>>>Upper>>>2>>>8",

  "Flip>>>Lower>>>5>>>11",

  "Generate",
]);
