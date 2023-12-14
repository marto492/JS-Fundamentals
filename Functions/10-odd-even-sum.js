function oddAndEvenSum(num){
    // let numAsStr = num.toString();
    let oddSum = 0;
    let evenSum = 0;

    // for(let i = 0; i<numAsStr.length; i++){
    //     if(Number(numAsStr[i]) % 2 == 0){
    //         evenSum+= Number(numAsStr[i]);
    //     }else{
    //         oddSum += Number(numAsStr[i]);
    //     }
    // }

    // console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);


    let numAsStr = String(num)

    for(let char of numAsStr){
        let digit = Number(char);
        if(digit % 2 == 0){
        evenSum += digit
        }else{
            oddSum += digit
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);



}

oddAndEvenSum(592141)