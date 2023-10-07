function checkFirstTwo(numOne, numTwo){

    if(numOne * numTwo >= 0){
        return `positive`
    }
    return `negative`;
}
function check(firstTwo, numThree){

    if(firstTwo == `positive` && numThree >= 0){
        return `Positive`;
    }
    return `Negative`;
}

let result = check(checkFirstTwo(-5,-5),-3);
console.log(result);

// function signCheck (numOne, numTwo, numThree){
// let firstTwo = ``;
// let firstTwosum = numOne * numTwo;
//     if(firstTwosum >= 0){
//         firstTwo = `Positive`
//     }else{
//         firstTwo = `Negative`
//     }

// let sum = firstTwosum * numThree;
// if(sum >= 0){
//     return `Positive`;
// }else{
//     return `Negative`;
// }
// }
// let result = signCheck(-5, 1, 1)
// console.log(result);