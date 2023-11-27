function dictionary(dict) {
  let dictObj = {}
  let dictionary = [];
  for (let term of dict) {
    let item = JSON.parse(term);
    dictionary.push(item);
  }

for(let entry of dictionary){
  let key = Object.keys(entry)
  let value = Object.values(entry);
  dictObj[key[0]] = value[0]
}

let entries = Object.entries(dictObj);
entries.sort((a, b) => a[0].localeCompare(b[0]))

let sorted = Object.fromEntries(entries)

for(let [term, description] of entries){

  sorted[term] = description

}

let sortedEntries = Object.entries(sorted);
for(let [term,description] of sortedEntries){
  console.log(`Term: ${term} => Definition: ${description}`);
}




  }
dictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of atropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
