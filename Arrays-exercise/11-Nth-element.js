function PrintNthElement(input){
let step = Number(input[input.length-1])
let modifiedarr = [];

for(let i = 0; i < input.length-1; i += step){
    modifiedarr.push(input[i])
    
}
console.log(modifiedarr.join(' '));

}
PrintNthElement(['5', '20', '31', '4', '20', '2'])