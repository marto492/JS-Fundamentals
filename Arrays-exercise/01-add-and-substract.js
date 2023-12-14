function addandSubstract(arr) {
  let modifiedArr = arr;
  let originalSum = 0;
  let modifiedSum = 0;

  for (let i = 0; i < modifiedArr.length; i++) {
    originalSum += arr[i];

    if (modifiedArr[i] % 2 == 0) {
      modifiedArr[i] += i;
    } else {
      modifiedArr[i] -= i;
    }

    modifiedSum += modifiedArr[i];
  }

  console.log(modifiedArr);
  console.log(originalSum);
  console.log(modifiedSum);
}
addandSubstract([5, 15, 23, 56, 35]);
