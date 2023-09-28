function gladiatorExpenses (lstFights, helmetPrice, swordPrice, shieldPrice, armorPrice){

    let brokenSwords = 0;
    let brokenHelmets = 0;
    let brokenShields = 0;
    let brokenArmours = 0;
    let brokenhel = false;
    let brokenswo = false;

for(let i = 1; i<= lstFights; i++){
    brokenhel = false
    brokenswo = false;
    if(i % 2 == 0){
        brokenHelmets++
        brokenhel = true;
    }
    if(i % 3 == 0){
        brokenSwords++
        brokenswo = true;
    }
    if(brokenhel && brokenswo){
        brokenShields++
        if(brokenShields % 2 == 0){
            brokenArmours++
        }
    }
    
}
let total = (brokenHelmets * helmetPrice) + (brokenShields * shieldPrice) + (brokenArmours * armorPrice) + (brokenSwords * swordPrice)
console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);


}
gladiatorExpenses(23,

    12.50,
    
    21.50,
    
    40,
    
    200)