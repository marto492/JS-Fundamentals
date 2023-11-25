function pascalSplit(input) {
  let text = "";

  for (let i = 0; i < input.length; i++) {
    if (input[i] == input[i].toUpperCase() && text.length > 1) {
      text = text + ", " + input[i];
    } else {
      text += input[i];
    }
  }
  console.log(text);
}
pascalSplit("SplitMeIfYouCanHaHaYouCantOrYouCan");
