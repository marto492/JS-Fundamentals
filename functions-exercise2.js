const noRemainder = (num, mod) => {

    if(num % mod == 0){
        return true;
    }else{
        return false;
    }
}
const result1 = noRemainder(10, 7);
const result2 = noRemainder(100, 10);
console.log(result1, result2);