function bitcoin(input){

    let btcmined = 0;
    let goldMined = 0;
    let firstDay = 0;
    let day = 0;
    let goldPrice = 67.51;
    let btcPrice = 11949.16;
    let totalCash = 0;

    for(let i = 0; i <= input.length-1; i++){
        day++
        if(day % 3 == 0){
            let steal = input[i] * 0.3
            totalCash += (input[i] - steal) * goldPrice;
            goldMined += input[i]
           
        }else{
            totalCash += input[i] * goldPrice;
            goldMined += input[i]
        }


        if(goldMined * goldPrice >= btcPrice ){
            firstDay = i;
        }
        


        while(totalCash >= btcPrice){
            totalCash -= btcPrice
            btcmined++
        }
    }

    if(btcmined >= 1){
        console.log(`Bought bitcoins: ${btcmined}`);
         console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }else{
        console.log(`Bought bitcoins: ${btcmined}`);
        console.log(`Left money: ${totalCash} lv`);
    }

    console.log(`Left money: ${totalCash} lv`);
    
   
 
// let btcMines = 0;
// let firstBought = 0;
// let totalMoney = 0;
// let day = 0
// for (let i = 0; i < input.length; i++) {
//     day++
//     let currGold = input[i];
//     totalMoney += input[i] * 67.51
//     if(day % 3 == 0){
//        currGold *= 0.70; 
//     }
//     if(currGold >= 176.998371){
//         btcMines++
//         firstBought++
//     }
    
// }
// if(btcMines > 0){
//     console.log(`Bought bitcoins: ${btcMines}`);
//     console.log(`Day of the first purchased bitcoin: ${firstBought}`);
// }

// totalMoney -= (btcMines * 11949.16)
// console.log(`Left money: ${totalMoney} lv`);

}
bitcoin([3124.15, 504.212, 2511.124])