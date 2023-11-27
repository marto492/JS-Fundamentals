function StorageMap(arr) {

    let map = new Map()

    for(let string of arr){
        let tokens = string.split(" ")
        let product = tokens[0]
        let quantity = Number(tokens[1])
        if(!map.has(product)){
            map.set(product, quantity)
        }else{
            let curQuantity = map.get(product);
            let newQuantity = curQuantity += quantity;
            map.set(product, newQuantity);
        }
    }

    for(let [product, quantity] of map){
        console.log(`${product} -> ${quantity}`);
    }

}
StorageMap(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
