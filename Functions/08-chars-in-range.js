function charsInRange(char1, char2) {
  let startChar = 0;
  let endChar = 0;

  if (char1 < char2) {
    startChar = char1.charCodeAt();
    endChar = char2.charCodeAt();
  } else {
    startChar = char2.charCodeAt();
    endChar = char1.charCodeAt();
  }

  let charsInRange = convert(startChar, endChar);

  console.log(charsInRange);

  function convert(startChar, endChar) {
    let charsString = "";
    for (let curChar = startChar + 1; curChar < endChar; curChar++) {
      charsString += String.fromCharCode(curChar) + " ";
    }
    return charsString;
  }
}

charsInRange("a", "d");
