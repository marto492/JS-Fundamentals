function store(stock, upComingOrder) {
  let products = {};
  for (let i = 0; i < stock.length; i++) {
    if (i % 2 == 0) {
      let product = stock[i];
      let qty = Number(stock[i + 1]);
      products[product] = qty;
    }
  }
  for (let i = 0; i < upComingOrder.length; i++) {
    if (i % 2 == 0) {
      let product = upComingOrder[i];
      let qty = Number(upComingOrder[i + 1]);
      if (product in products) {
        products[product] += qty;
      } else {
        products[product] = qty;
      }
    }
  }

  let entries = Object.entries(products);
for(let entry of entries){
    console.log(`${entry[0]} -> ${entry[1]}`);
}
}

store(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],

  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
