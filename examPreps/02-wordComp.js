function wordCompetition([inputStr]) {
  let pattern = /(@|#)[A-Za-z]{3,}\1\1[A-Za-z]{3,}\1/gi;
  let match = pattern.match(inputStr);

  
}

//   if (match.length > 0) {
//     console.log(`${match.length} word pairs found!`);
//   } else {
//     console.log(`No word pairs found!`);
//   }
//   if (mirrorWords.length > 0) {
//     console.log(`The mirror words are: \n${mirrorWords.join(" <=> ")}`);
//   }
// }
wordCompetition(
    ['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']
);
