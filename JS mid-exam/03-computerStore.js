function computerStore(order) {
  let notTaxed = 0;
  let customerType = order.pop();
  let orderNums = order.map(Number);

  for (let i = 0; i < orderNums.length; i++) {
    if (orderNums[i] <= 0) {
      console.log(`Invalid price!`);
    } else {
      notTaxed += orderNums[i];
    }
  }
  let taxedPrice = notTaxed * 1.2;
  let taxes = taxedPrice - notTaxed;

  if (customerType == "special") {
    taxedPrice *= 0.9;
  }
  if (taxedPrice == 0) {
    console.log(`Invalid order!`);
    return;
  } else {
    console.log(`Congratulations you've just bought a new computer!`);
    console.log(`Price without taxes: ${notTaxed.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log(`-----------`);
    console.log(`Total price: ${taxedPrice.toFixed(2)}$`);
  }
}
computerStore(["1050", "200", "450", "2", "18.50", "16.86", "special"]);
