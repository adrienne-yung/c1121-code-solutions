const fs = require('fs');
const dataJson = require('./data.json');

if (process.argv[2] === 'read') {
  for (const property in dataJson.notes) {
    console.log(`${property}: ${dataJson.notes[property]}`);
  }
}
if (process.argv[2] === 'create') {
  var newNote = process.argv[3];
  dataJson.notes[dataJson.nextId] = newNote;
  dataJson.nextId++;
  const data = JSON.stringify(dataJson, null, 2);
  fs.writeFile('data.json', data, 'utf8', err => {
    if (err) throw err;
  });
}
if (process.argv[2] === 'update') {
  var editedNote = process.argv[4];
  dataJson.notes[process.argv[3]] = editedNote;
  const data = JSON.stringify(dataJson, null, 2);
  fs.writeFile('data.json', data, 'utf8', err => {
    if (err) throw err;
  });
}
if (process.argv[2] === 'delete') {
  delete dataJson.notes[process.argv[3]];
  const data = JSON.stringify(dataJson, null, 2);
  fs.writeFile('data.json', data, 'utf8', err => {
    if (err) throw err;
  });
}
