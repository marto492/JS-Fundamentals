function sumFirstLast(arr){
    let first = arr.shift()
    let last = arr.pop()
    let result = Number(first) + Number(last);
    console.log(result);
}
sumFirstLast([5,15])