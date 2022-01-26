var express = require('express');
const dataJson = require('./data.json');
var app = express();

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

app.get('/api/notes', function (req, res) {
  var notesArray = [];
  for (const property in dataJson) {
    notesArray.push(dataJson[property]);
  }
  res.json(notesArray);
});

app.use(express.json());

app.get('/api/notes/:id', function (req, res) {
  var reqParamsId = parseInt(req.params.id);
  if (reqParamsId <= 0) {
    res.status('400').json({ error: 'I must be a positive integer' });
  } else if (reqParamsId.matches(dataJson.notes.id)) {
    res.status('200').json(reqParamsId);
  } else {
    res.status('404').json({ error: 'I do not exist' });
  }
});

// app.post('api/notes', function (req, res) {
//   if (process.argv[4] = null) {
//     res.status('400').json({ error: 'Content is a required field' });
//   } else if () {
//     req.body.id = dataJson.nextId;
//     dataJson.notes[dataJson.nextId] = dataJson.notes;
//     dataJson.nextId++;
//     res.status('201').json(dataJson.notes);
//   } else {
//     res.status('500').json({ error: 'An unexpected error occurred' });
//   }
// });

// app.delete('api/notes:/id', function (req, res) {
//   var reqParamsId = parseInt(req.params.id);
//   if (reqParamsId <= 0) {
//     res.status('400').json({ error: 'I must be a positive integer' });
//   } else if () {
//     res.status('404').json({ error: 'I do not exist' });
//   } else if () {
//     res.status('500').json({ error: 'An unexpected error occurred' });
//   } else {
//     res.status('204').json('Deletion successful');
//   }
// });

// app.put('api/notes/:id', function (req, res) {
//   if ((resParamsId <= 0) || (process.argv[4]) === null) {
//     res.status('400').json({ error: 'I must be a positive integer'} || { error: 'Content is required' })
//   } else if () {
//     res.status('404').json({ error: 'I think there is a note here' });
//   } else if () {
//     res.status('500').json({ error: 'Cannot find note with this id' });
//   } else {
//     res.status('200').json('Changes made successfully');
//   }
// });
