function orders(item, count) {
  let totalprice = 0;

  switch (item) {
    case `coffee`:
      totalprice = count * 1.5;
      break;
    case `water`:
      totalprice = count * 1.0;
      break;
    case `coke`:
      totalprice = count * 1.4;
      break;
    case `snacks`:
      totalprice = count * 2.0;
      break;
    default:
      console.log(`Item not in stock.`);
      break;
  }
  return totalprice.toFixed(2)
}
let res = orders(`coke`, 5)
console.log(res);