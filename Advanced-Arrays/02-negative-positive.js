function negativeOrPositive(arr) {
  let result = [];

  for (let num of arr) {
    if (Number(num) < 0) {
      result.unshift(num);
    } else {
      result.push(num);
    }
  }
  for(let num of result){
    console.log(num);
  }
}
negativeOrPositive(["7", "-2", "8", "9"]);
