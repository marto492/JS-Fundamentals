function replaceRepeatingChars(input){
    let inputArr = input.split("");
    let prevChar = ``;
    let result = ``;
    for(let char of inputArr){
        if(prevChar !== char){
            result+=char
            prevChar = char;
        }

    }
console.log(result);
}
replaceRepeatingChars("aaaaabbbbbbcccccdddddeeeeffff")