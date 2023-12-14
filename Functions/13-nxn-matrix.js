function matrix(num) {
  for (let i = 0; i < num; i++) {
    let row = ``;
    for (let n = 0; n < num; n++) {
      row += num + " ";
    }
    console.log(row);
  }
}
matrix(10);
