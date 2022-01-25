var express = require('express');
var app = express();
var nextId = 1;
var grades = {};

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

app.get('/api/grades', function (req, res) {
  var gradesArray = [];
  for (const property in grades) {
    gradesArray.push(grades[property]);
  }
  res.json(gradesArray);
});

app.use(express.json());

app.post('/api/grades', function (req, res) {
  req.body.id = nextId++;
  res.json(req.body);
  grades = req.body;
  res.send().status(201);
});
