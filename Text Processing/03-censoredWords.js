function censoredWords(text, word) {
    
let result = text;
let censor = "*".repeat(word.length);
    while(result.includes(word)){
   result = result.replace(word, censor);
    }

    console.log(result);


}
censoredWords("A small sentence with some words", "small");
censoredWords('Find the hidden word', 'hidden')