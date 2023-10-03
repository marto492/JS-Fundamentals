function mergeArr(arr1, arr2) {
  let mergedArr = [];

  for (let i = 0; i < arr1.length; i++) {
    let arr1Num = Number(arr1[i]);
    let arr2Num = Number(arr2[i]);

    if (i % 2 == 0) {
        mergedArr.push(arr1Num + arr2Num);
    }else{
        mergedArr.push(arr1[i] + arr2[i])
    }
  }
  let result = mergedArr.join(' - ')
  console.log(result);
}
mergeArr(
  ["5", "15", "23", "56", "35"],

  ["17", "22", "87", "36", "11"]
);
