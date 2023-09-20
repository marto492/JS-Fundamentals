function nextDay(year, month, day){

    let getDate = new Date(year, month-=1, day+=1);

    let getYear = getDate.getFullYear();
    let getMonth = getDate.getMonth();
    let getDay = getDate.getDay();



    console.log(getDay);
    console.log(`${getYear}-${getMonth + 1}-${getDay}`);

}
nextDay(2016, 9, 4)