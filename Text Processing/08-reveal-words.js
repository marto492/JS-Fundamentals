function revealWords(words, text){

    let wordList = words.split(", ");

    for(let word of wordList){
        let count = word.length;
        let starred = "*".repeat(count)
        text = text.replace(starred, word)
        
    }

console.log(text);






}
revealWords('great', 'softuni is ***** place for learning new programming languages')