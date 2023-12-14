function equalSums(arr) {
  let found = "no";
  let arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    let leftSum = 0;
    let rightSum = 0;

    for (let l = 0; l < i; l++) {
      leftSum += arr[l];
    }

    for (let r = i + 1; r < arrLength; r++) {
      rightSum += arr[r];
    }

    if(leftSum === rightSum){
        found = i;
    }


  }

  console.log(found);

}

equalSums([1, 2, 3, 3]);
