function addorremove(commands) {
  let count = 1;
  let modifiedArr = [];
  for (let i = 0; i < commands.length; i++) {
    if (commands[i] == "add") {
      modifiedArr.push(i + 1);
    } else {
      modifiedArr.pop();
    }
  }
  if (modifiedArr.length == 0) {
    console.log(`Empty`);
  } else {
    console.log(modifiedArr.join(" "));
  }
}
addorremove(["remove", "remove", "remove"]);
