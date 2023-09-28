function calculator(num1, operation, num2){
    if(operation == "+"){
        console.log((num1 + num2).toFixed(2));
    }else if(operation == "-"){
        console.log((num1-num2).toFixed(2));
    }else if(operation == "/"){
        console.log((num1 / num2).toFixed(2));
    }else if(operation == "*"){
        console.log((num1 * num2).toFixed(2));
    }else{
        console.log("Error, operator not compatible.");
    }

}
calculator(`5`, `+`, `10`)