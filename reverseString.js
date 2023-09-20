function reversedString(string){

    let reverse =""
    let stringChars = string.length;

    for(let i = string.length; i>=0; i--){
        reverse+=string.charAt(i);
    }
    console.log(reverse);
}
reversedString("Hello")