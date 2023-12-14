function listOfProducts(arr) {

    // let sorted = arr.sort((a, b) => a.localeCompare(b))
    // let sort = sorted.map((x, i) => `${i+1}.${x}`)
    // let result = sort.join('\n');
    // console.log(result);

    let sorted = arr.sort()
    let mapped = sorted.map((x, i) => `${i+1}.${x}`)
    let result = mapped.join(`\n`)
    console.log(result);
}
listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);
