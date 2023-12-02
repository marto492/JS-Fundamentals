function furniture(arr) {
  let items = [];
  let totalCost = 0;

  let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d*)!(?<qty>\d+)/;

  let command = arr.shift();

  while (command != "Purchase") {
    let match = command.match(pattern);

    if (match) {
      let name = match.groups.name;
      let price = match.groups.price;
      let qty = match.groups.qty;

      items.push(name);
      let totalPrice = Number(qty) * Number(price);
      totalCost += totalPrice;
    }

    command = arr.shift();
  }

  console.log(`Bought furniture:`);
  if (items.length > 0) {
    console.log(items.join("\n"));
  }
  console.log(`Total money spend: ${totalCost.toFixed(2)}`);
}
furniture([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
