function smallestOfThreeNums(num1,num2,num3){

    let smallestnum = 0;

    let arr = [num1, num2, num3];
    for(let i = 0; i < arr.length; i++){
        smallestnum = arr[i]
        if(arr[i] <= smallestnum){
            smallestnum = arr[i]
        }
    }
    return smallestnum
}
smallestOfThreeNums(8,14,5,1)