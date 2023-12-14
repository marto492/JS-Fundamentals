function carWash(arr) {
  console.log(`The car is ${washingAction(arr).toFixed(2)}% clean.`);

  function washingAction(actions) {
    let washed = 0;
    for (let action of actions) {
      switch (action) {
        case `soap`:
          washed += 10;
          break;
        case `water`:
          washed *= 1.2;
          break;
        case `vacuum cleaner`:
          washed *= 1.25;
          break;
        case `mud`:
          washed *= 0.9;
          break;
      }
    }
    return washed;
  }
}
carWash(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"]);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
