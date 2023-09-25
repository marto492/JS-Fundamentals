function tripleLatinLetters(n){
  
    for(let i = 0; i<Number(n); i++){

        for(let j = 0; j<Number(n); j++){

            for(let k = 0; k<Number(n); k++){
                let letter = String.fromCharCode(97+i);
                let letter1 = String.fromCharCode(97+j);
                let letter2 = String.fromCharCode(97+k);
                console.log(letter + letter1 + letter2);
            }
        }
    }
}
tripleLatinLetters("3")