function guineaPig2(input) {
    let inputArr = input.map(Number);

    //quantities
    let food = inputArr[0] * 1000;
    let hay = inputArr[1] * 1000;
    let cover = inputArr[2] * 1000;
    let weight = inputArr[3] * 1000;
    
    let usedCover = weight / 3;

    for(let i = 1; i <= 30; i++){
        food -= 300;
        if(i % 2 == 0){
            hay -= food * 0.05;
        }
        if(i % 3 == 0){
            cover -= usedCover;
        }

        if(food <= 0 || hay <= 0 || cover <= 0){
            console.log(`Merry must go to the pet store!`);
            return;
        }

    }

    food /= 1000
    hay /= 1000
    cover /= 1000



    console.log(`Everything is fine! Puppy is happy! Food: ${food.toFixed(2)}, Hay: ${hay.toFixed(2)}, Cover: ${cover.toFixed(2)}.`);






}
guineaPig2(["9",

"5",

"5.2",

"1"]);
