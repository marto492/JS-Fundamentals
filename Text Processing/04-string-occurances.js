function stringOccurances(text, word) {
  let wordsOfText = text.split(" ");
  let count = 0;
  for (curWord of wordsOfText) {
    if (curWord == word) {
      count++;
    }
  }

  console.log(count);
}
stringOccurances("This is a word and it also is a sentence", "is");
