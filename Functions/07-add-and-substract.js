function AddAndSubstract(num1, num2, num3){

    function sum(num1, num2){
        return num1+num2
    }


    function substract(num1, num2){

        return num1-num2;

    }


    result1 = sum(num1, num2);
    result2 = substract(result1, num3)
   return result2;
}

AddAndSubstract(15,15,10)