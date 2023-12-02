function softUniBar(input) {

    let command = input.shift()
    let pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>\d+\.?\d*)\$/
    let totalIncome = 0

    while(command != "end of shift"){

        let match = command.match(pattern);
        if(match){
        let {customer, product, count, price } = match.groups;
        let income = Number(count) * Number(price)
        totalIncome += income

        console.log(`${customer}: ${product} - ${income.toFixed(2)}`);
        }
        command = input.shift()2
    }

console.log(`Total income: ${totalIncome.toFixed(2)}`);


}
softUniBar([
  "%George%<Croissant>|2|10.3$",

  "%Peter%<Gum>|1|1.3$",

  "%Maria%<Cola>|1|2.4$",

  "end of shift",
]);
