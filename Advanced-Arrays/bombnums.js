function bombNumbers(nums, bombinfo) {
  let [bombNum, power] = bombinfo;

  while (nums.includes(bombNum)) {
    let idx = nums.indexOf(bombNum);
    nums.splice(idx - power, power * 2 + 1);
  }

  console.log(nums);
}
bombNumbers(
  [
    1, 2, 2, 4, 2, 2,

    2, 9,
  ],

  [4, 2]
);
