function numModificator(num) {





  function averageNum(num) {
    let sumOfDigits = 0;
    let avgOfDigits = 0;
    let numAsStr = String(num);

    for (let i = 0; i < numToArr(num).length; i++) {
      sumOfDigits += numToArr(num)[i];
    }
    avgOfDigits = sumOfDigits / numAsStr.length;
    return avgOfDigits;
  }

  function numToArr(num) {
    let numAsStr = num;
    let digits = [];
    for (let i = 0; i < numAsStr.length; i++) {
      digits.push(Number(numAsStr[i]));
    }

    return digits;
  }
}
numModificator(101);
