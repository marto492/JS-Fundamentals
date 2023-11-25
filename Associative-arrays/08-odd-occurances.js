function oddOccurances(str){
    let myobj = {}

    let inputArr = str.toLowerCase().split(" ");
   

    for(let word of inputArr){
        if(word in myobj){
            myobj[word]++
        }else{
            myobj[word] = 1;
        }
    }

    let entries = Object.entries(myobj);
    let oddOccurances = []
    for(let [word, occurrences] of entries){
        if(occurrences % 2 == 1){
            oddOccurances.push(word)
        }
    }

    console.log(oddOccurances.join(" "));


}
oddOccurances('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
oddOccurances('Cake IS SWEET is Soft CAKE sweet Food')