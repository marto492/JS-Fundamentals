function spiceMustFlow(initialYield){
    let day = 0;
    let totalyield = 0;
    while(initialYield > 99){
       
        totalyield+=initialYield 
        initialYield -= 10;
        totalyield -= 26;
        day++
    }
    totalyield-=26;
    console.log(day)
    console.log(Math.max(totalyield, 0));
}
spiceMustFlow()