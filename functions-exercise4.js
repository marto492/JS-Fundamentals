const square = (num) => {
    return num ** 2;
}

const sumOfSquares = (num1, num2) => {
   return square(num1) + square(num2);
}

console.log(sumOfSquares(2, 3));
console.log(sumOfSquares(3, 4));
