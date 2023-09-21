const login = (username, password) => {
    if(username === "admin" || (username == "monkey" && password == "123") || (username == "moomoo" && password == "farm")){
        return true;
    }else{
        return false;
    }
}
const test1 = login(`hello`, `meow`);
const test2 = login(`admin`, `lol`);
const test3 = login(`monkey`, `123`);
const test4 = login(`moomoo`, `farm`);
const test5 = login(`moomoo`,`moo`);
    
console.log(test1, test2, test3, test4, test5);