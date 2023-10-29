function guineaPig(input) {

    let food = Number(input[0]);
    let hay = Number(input[1]);
    let cover = Number(input[2]);
    let weight = Number(input[3]);

    for (let i = 1; i <= 30; i++) {
      if (food < 1 || hay < 1 || cover < 1) {
        console.log(`Merry must go to the pet store!`);
        return;
      }
      food -= 0.3;
      if (i % 2 == 0) {
        hay -= food * 0.05;
      }
      if (i % 3 == 0) {
        cover -= weight / 3;
      }
    }
  
    console.log(
      `Everything is fine! Puppy is happy! Food: ${food.toFixed(
        2
      )}, Hay: ${hay.toFixed(2)}, Cover: ${cover.toFixed(2)}.`
    );
  }
guineaPig(["9",

"5",

"5.2",

"1"]);
