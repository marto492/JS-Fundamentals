function houseForSale() {
  let houseForSale = {
    area: 940,
    value: 320000,
    streetName: `Fifth Street`,
    built: 2012,
    owner: { name: `Blake`, age: 29 },
    offers: [290000, 295000, 315000, 312000],
  };
  // console.log(houseForSale);
  delete houseForSale.built;
  // console.log(houseForSale);
  houseForSale.owner.age = 30;
  let bestOffer = houseForSale.offers.reduce((a, b) => Math.max(a, b));
  console.log(bestOffer);
  houseForSale["sale price"] = 312000;
  console.log(houseForSale);

}
houseForSale();
