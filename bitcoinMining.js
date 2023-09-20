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

        let totalCash1stDay = totalCash - btcPrice;
      

        while(totalCash >= btcPrice){
            totalCash -= btcPrice
            btcmined++
            if(totalCash == totalCash1stDay){
                firstDay++;
            }
        }
      
    }

    if(btcmined >= 1){
        console.log(`Bought bitcoins: ${btcmined}`);
         console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }else{
        console.log(`Bought bitcoins: ${btcmined}`);
    }

    console.log(`Left money: ${totalCash.toFixed(2)} lv.`);
}
bitcoin([3124.15, 504.212, 2511.124])