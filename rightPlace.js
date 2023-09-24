function rightPlace(string, char, string1){

    //               FIRST EXAMPLE
    // let str = ''

    // for(let i = 0; i < string.length; i++){
    //     if(string[i] == "_"){
    //         str+=char
            
    //     }else{
    //         str += string[i]

    //     }
    // }
    // if(str == string1){
    //     console.log("Matched");
    // }else{
    //     console.log("Not Matched");
    // }



    //               SECOND EXAMPLE

// let str = string.replace("_", char)
// if(str == string1){
//     console.log("Matched");
// }else{
//     console.log("Not Matched");
// }


//       THIRD EXAMPLE:
let str = string.replace("_",char)
let output = str == string1 ? "Matched" : "Not Matched"
console.log(output);
}
rightPlace('Str_ng', 'i','String')