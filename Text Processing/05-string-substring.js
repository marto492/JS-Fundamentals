function stringSubstring(word, text){

    text = text.toLowerCase();
    let textArr = text.split(" ");

    if(textArr.includes(word)){
        console.log(word);
    }else{
        console.log(`${word} not found!`);
    }




}
stringSubstring('javascript',
'JavaScript is the best programming language')