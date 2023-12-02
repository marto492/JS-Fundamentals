function matchName(input){

    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g
    let validNames = [];
    while((validName = pattern.exec(input)) !== null){
        validNames.push(validName[0])
    }
    
   console.log(validNames.join(" "));
}
matchName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan  Ivanov")