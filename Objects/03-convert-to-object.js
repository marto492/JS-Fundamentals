function convertToJSON(json) {
  let parsed = JSON.parse(json);

  let keys = Object.keys(parsed);

  for (let key of keys) {
    console.log(`${key}: ${parsed[key]}`)
  }
}
convertToJSON('{"name": "George", "age": 40, "town": "Sofia"}');
