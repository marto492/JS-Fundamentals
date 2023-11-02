function employee(arr) {


    for(let name of arr){
        let employee = {
            name: name,
            personalNum: name.length
        }
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNum}`);
    }
}
employee([
  "Silas Butler",

  "Adnaan Buckley",

  "Juan Peterson",

  "Brendan Villarreal",
]);
