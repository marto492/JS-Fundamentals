function shopStore() {
  let banana = {
    name: `banana`,
    quantity: 1,
    price: 1.95,
  };
  let apple = {
    name: `apple`,
    quantity: 1,
    price: 1.45,
  };
  let candy = {
    name: `candy`,
    quantity: 1,
    price: 3.5,
  };

  let store = {
    storeNumber: 5,
    locationCity: `Milan`,
    locationCountry: `Italy`,
    products: [banana, apple, candy],
  };
  console.log(`---`);
  for (let product of store.products) {
    console.log(product);
  }
  console.log(`---`);
  console.log(store.products[2]);
  store.products[0].price = 1.75;
  console.log(store);
  console.log(banana);
  candy.price = 4.99;
  console.log(store);
  console.log(candy);
}

shopStore();
