function towns(arr) {
  for (let i = 0; i < arr.length; i++) {
    let currentTown = arr[i].split(" | ");
    let townName = currentTown.shift();
    let townlatitude = Number(currentTown.shift());
    let townlongitude = Number(currentTown.shift());
    let townInfo = {
      town: townName,
      latitude: townlatitude.toFixed(2),
      longitude: townlongitude.toFixed(2),
    };
    console.log(townInfo);
  }
}
towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
