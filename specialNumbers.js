function specialNums(num){

let numAsString = String(num)
for(let i = 1; i<=Number(numAsString); i++){
    let sum = ''
    
  if(i<10){
    if(i == "5" || i == "7"){
        console.log(`${i} -> True`);
    }else{
        console.log(`${i} -> False`);
    }
  }else{

    let above10sum = (i % 10) + (parseInt(i / 10));
    if(above10sum == 5 || above10sum == 7 || above10sum == 11){
        console.log(`${i} -> True`);
    }else{
        console.log(`${i} -> False`);
    }

    }
  }

// while(num != 0){
// if((num < 10) & ){

// }

// }

}

specialNums(20)