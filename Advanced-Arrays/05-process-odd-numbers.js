function processOddNums(arr){

    // let oddIndexes = arr.filter((x, i) => i % 2 != 0)
    // let doubled = oddIndexes.map(x => x*2);
    // let result = doubled.reverse().join(' ')
    let shortResult = arr.filter((x, i) => i % 2 == 1).map(x => x*2).reverse().join(' ')
    console.log(shortResult);
    
   
}
processOddNums([3, 0, 10, 4, 7, 3])