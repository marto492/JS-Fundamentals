function worldTour(input) {
  let wrlTour = input.shift();

  while (input[0] != "Travel") {
    let [command, idx1, idx2] = input[0].split(":");

    switch (command) {
      case `Add Stop`:
        if ((idx1 >= 0) & (idx1 <= wrlTour.length)) {
          let firstHalf = wrlTour.slice(0, idx1);
          let secondHalf = wrlTour.slice(idx1);
          let toInsert = idx2;
          wrlTour = firstHalf + toInsert + secondHalf;
          console.log(wrlTour);
        }

        break;
      case `Remove Stop`:
        idx1 = Number(idx1);
        idx2 = Number(idx2);
        if (idx1 >= 0 && idx2 <= wrlTour.length) {
          let index1 = idx2 + 1;
          let leftHalf = wrlTour.slice(0, idx1);
          let rightHalf = wrlTour.slice(idx2 + 1);
          wrlTour = leftHalf + rightHalf;
          console.log(wrlTour);
        }
        break;
      case `Switch`:
        //let test = wrlTour.replace(idx1, idx2);
        while(wrlTour.includes(idx1)){
        wrlTour = wrlTour.replace(idx1, idx2)
        }
        console.log(wrlTour);
        break;
    }

    input.shift();
  }

  console.log(`Ready for world tour! Planned stops: ${wrlTour}`);
}
worldTour([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);
