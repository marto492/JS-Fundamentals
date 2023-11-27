function partyTime(arr) {
  let list = arr.splice(arr.indexOf("PARTY"));
list.shift();

for(let el of list){
    if(list.includes(arr[el])){
        console.log(el);
    }else{
        console.log("test", el);
    }
}


}

partyTime([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
