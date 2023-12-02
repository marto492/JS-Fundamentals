function food(input) {
  let pattern =
    /(\||#)(?<item>[A-Za-z ]+)\1(?<expDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>[0-9]+)\1/g;
  let products = [];
  let totalCalories = 0;
  let matches = input[0].matchAll(pattern);
  for (let match of matches) {
    let { item, expDate, calories } = match.groups;
    calories = Number(calories);
    totalCalories += calories;
    products.push({ item, expDate, calories });
  }

  console.log(
    `You have food to last you for: ${Math.floor(totalCalories / 2000)} days!`
  );
  for (let product of products) {
    console.log(
      `Item: ${product.item}, Best before: ${product.expDate}, Nutrition: ${product.calories}`
    );
  }
}

food([
  "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
]);
