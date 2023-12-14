function repeatString(str, count){
    let repeatedString = ``
for(let i = 0; i < count; i++){
   repeatedString+=str
}
return repeatedString
}
let res = repeatString(`abc`, 3)
console.log(res);