function specialNums(num){
    // let numasString = String(num);
    // let sum = 0;
    
    // for(let i = 1; i <= num; i++){
       
    //     let Chars = ""
    //     if(i < 10){
    //         String(sum = i);
    //     }else{

          
            
    //     }
    //     if(sum == "5" || sum =="7" || sum == "11"){
    //         console.log(`${sum} -> True`);
    //     }else{
    //         console.log(`${sum} -> False`);
    //     }
    // }

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
}

specialNums(20)