function amazingNums(num) {
  let numAsString = String(num);
  let sum = 0;
  let amazing = "False";

  for (let i = 0; i < numAsString.length; i++) {
    sum += Number(numAsString[i]);
  }
let sumAsString = String(sum);
    for(let i = 0; i < sumAsString.length; i++){
        if(sumAsString[i] == "9"){
            amazing = "True";
        }
    }

  console.log(`${num} Amazing? ${amazing}`);


}
amazingNums(12233);
