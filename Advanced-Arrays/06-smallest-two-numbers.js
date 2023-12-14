function smallestTwoNums(arr){
    let result = arr.sort((a,b) => a-b).splice(0, 2).join(' ')
    console.log(result);
}
smallestTwoNums([1,5,2,4,17,81,123,11,3,6])