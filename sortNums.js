function sortNums(n1, n2, n3) {
  let arrnum = [n1, n2, n3];
  arrnum.sort();
  for (let i = arrnum.length-1; i >= 0; i--) {
    console.log(arrnum[i]);
  }
}
sortNums(2, 1, 3);
