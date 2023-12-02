function emojiDetect(input) {
  let string = input.shift();
  let emojiPattern = /(::|\*\*)(?<emoji>[A-Z]{1}[a-z]{2,})\1/gm;
  let digitPattern = /\d/gm;
  let coolEmojis = [];

  let allemojis = string.match(emojiPattern);

  let matchedDigits = string.match(digitPattern);
  let threshold = matchedDigits.shift();
  for (let digit of matchedDigits) {
    threshold *= digit;
  }
  console.log(`Cool threshold: ${threshold}`);
  let emojisCount = string.match(emojiPattern).length;
  console.log(`${emojisCount} emojis found in the text. The cool ones are:`);

  for (let emoji of allemojis) {
    let countallAsciis = 0;
    for (char of emoji) {
      if (
        (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) ||
        (char.charCodeAt() >= 97 && char.charCodeAt() <= 122)
      ) {
        countallAsciis += char.charCodeAt();
      }
    }
    if (countallAsciis >= threshold) {
      coolEmojis.push(emoji);
    }
  }
  for (const emoji of coolEmojis) {
    console.log(emoji);
  }
}

emojiDetect([
  "In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**",
]);
