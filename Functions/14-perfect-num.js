function perfectNum(num){
    let advisorSum = 0;

    for(let divisor = 1; divisor < num; divisor++){
        if(num % divisor == 0){
            advisorSum+=divisor
        }
    }

    if(advisorSum == num){
        console.log(`We have a perfect number!`);
    }else{
        console.log(`It's not so perfect.`);
    }
}
perfectNum(28)