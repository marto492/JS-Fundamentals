function factorialDivison(num1, num2) {
    
    let factorial1 = calcFactorial(num1)
    let factorial2 = calcFactorial(num2)
    let result = (factorial1/factorial2).toFixed(2)

    console.log(result);
    


  function calcFactorial(num) {
    let factorial = 1;

    while (num > 1) {
      factorial *= num;
      num--;
    }
    return factorial;
  }
}

factorialDivison(5, 2)