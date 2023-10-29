function convertToJson(firstName, lastName, hairColor) {
  let person = {};
  person.name = firstName;
  person.lastName = lastName;
  person.hairColor = hairColor;

  let json = JSON.stringify(person);
  console.log(json);
}
convertToJson(
  "Peter",
  "Smith",

  "Blond"
);
