function subString(str, start, count){
   
    let end = start + count;
    let result = str.substring(start, end);
    console.log(result);

}
subString("SkipWord",4, 8)