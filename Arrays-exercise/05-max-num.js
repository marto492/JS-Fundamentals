function maxNum(arr) {
  let topNums = [];

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let isTop = true;

    for (let j = i + 1; j < arr.length; j++) {
        let rightNum = arr[j]
        if(rightNum >= num){
            isTop = false;
            break;
        }
    }
    if(isTop){
        topNums.push(num)
    }
    
  }
  console.log(topNums.join(' '));
}

maxNum([27, 19, 42, 2, 13, 45, 48]);
