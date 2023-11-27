function piccolo(arr) {
  let myObj = {};
  for (let car of arr) {
    let [direction, Regnumber] = car.split(", ");
    if (direction === "IN") {
      myObj[Regnumber] = Regnumber.slice(2, -2);
    } else if (direction === "OUT") {
      delete myObj[Regnumber];
    }
  }

  let checkIfEmpty = Object.keys(myObj);
  if (!checkIfEmpty.length) {
    console.log(`Parking Lot is Empty`);
  }
  let entries = Object.entries(myObj);

  entries.sort((a, b) => a[1] - b[1]);
  let sorte = Object.fromEntries(entries);
  let CarsInside = Object.keys(sorte);
  for (let number of CarsInside) {
    console.log(number);
  }
}
piccolo([
  "IN, CA2844AA",
  "OUT, CA2844AA"
]);
