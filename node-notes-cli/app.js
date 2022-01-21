const fs = require('fs');
const dataJson = require('./data.json');

if (process.argv[2] === 'read') {
  for (const property in dataJson.notes) {
    console.log(`${property}: ${dataJson.notes[property]}`);
  }
}
if (process.argv[2] === 'create') {
  const data = JSON.stringify(process.argv[3], null, 2);
  fs.writeFile('data.json', data, 'utf8', err => {
    if (err) throw err;
    dataJson.nextId++;
    dataJson.notes[dataJson.nextId] = process.argv[3];
    // console.log(process.argv);
    // console.log(data);
    // console.log(dataJsonnextId: data)
  });
}
// if (process.argv[2] === 'delete') {

// }
// if (process.argv[2] === 'update') {

// }
