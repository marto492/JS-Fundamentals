function commonEls(arr1, arr2){


    // for(let el of arr1){
    //     if(arr2.includes(el)){
    //         console.log(el);
    //     }
    // }


    for(let el of arr1){

        for(let el1 of arr2){
            if(el === el1){
                console.log(el);
            }
        }
    }
}
commonEls(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2'])