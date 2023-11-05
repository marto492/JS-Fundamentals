function addressBook(arr) {
  let addressBook = {};
  for (entries of arr) {
    let [name, address] = entries.split(":");

    addressBook[name] = address;
  }
  
  let sortedEntries = Object.entries(addressBook);
  sortedEntries.sort((a, b) => a[0].localeCompare(b[0]))
  let sorted = Object.fromEntries(sortedEntries);

  for(let entry in sorted){
    console.log(`${entry} -> ${sorted[entry]}`);
  }
  




}
addressBook([
  "Tim:Doe Crossing",

  "Bill:Nelson Place",

  "Peter:Carlyle Ave",

  "Bill:Ornery Rd",
]);
