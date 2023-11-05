function Meetings(arr) {
  let myObj = {};
  for (let curday of arr) {
    let [day, name] = curday.split(" ");
    if (day in myObj) {
      console.log(`Conflict on ${day}!`);
      continue;
    }
    console.log(`Scheduled for ${day}`);
    myObj[day] = name;
  }

  for (let day in myObj) {
    console.log(`${day} -> ${myObj[day]}`);
  }
}
Meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
