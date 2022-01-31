var express = require('express');
var app = express();
var pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

app.get('/api/grades', (req, res, next) => {
  const sqlgrades = `
        select *
        from "grades"`;
  db.query(sqlgrades)
    .then(result => {
      const grades = result.rows;
      res.status(200).json(grades);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'An unexpected error has occurred, could not query' });
    });
});

const middleware = express.json();
app.use('/api/grades', middleware);

app.post('/api/grades', (req, res, next) => {
  const addGrade = req.body;
  const grade = Number(addGrade.score);
  if (!Number.isInteger(grade) || grade < 0 || grade > 100) {
    res.status(400).json({ error: 'Score must be a number from 0-100' });
    return;
  } else if (addGrade.name === undefined || addGrade.score === undefined || addGrade.course === undefined) {
    res.status(400).json({ error: 'Not a valid input' });
    return;
  }
  const values = [addGrade.name, addGrade.score, addGrade.course];
  const sqlgrades = `
        insert into "grades" ("name", "course", "score")
        values ($1, $2, $3)
        returning * `;
  db.query(sqlgrades, values)
    .then(result => {
      const grade = result.rows[0];
      res.status(201).json(grade);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'An unexpected error has occurred, could not query' });
    });
});

app.put('/api/grades/:gradeId', (req, res, next) => {
  const updatedGrade = req.body;
  const grade = Number(updatedGrade.score);
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: 'gradeId must be a positive integer' });
    return;
  } else if (!Number.isInteger(grade) || grade > 100 || grade < 0) {
    res.status(400).json({ error: 'Score must be a number from 0-100' });
    return;
  } else if (updatedGrade.name === undefined || updatedGrade.score === undefined || updatedGrade.course === undefined) {
    res.status(400).json({ error: 'Not a valid input' });
    return;
  }
  const values = [updatedGrade.name, updatedGrade.course, updatedGrade.score, gradeId];
  const sqlgrades = `
        update "grades"
        set "name" = $1,
            "course" = $2,
            "score" = $3
        where "gradeId" = $4
        returning * `;
  db.query(sqlgrades, values)
    .then(result => {
      const resultGrade = result.rows[0];
      if (resultGrade === undefined) {
        res.status(404).json({ error: 'Cannot find the grade with this gradeId' });
      } else {
        res.status(200).json(resultGrade);
      }
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'An unexpected error has occurred, could not update' });
    });
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: 'gradeId must be a positive integer' });
    return;
  }
  const values = [gradeId];
  const sqlgrades = `
        delete from "grades"
        where "gradeId" = $1
        returning * `;
  db.query(sqlgrades, values)
    .then(result => {
      const resultGrade = result.rows[0];
      if (resultGrade === undefined) {
        res.status(404).json({ error: 'Cannot find the grade with this gradeId' });
      } else {
        res.sendStatus(204);
      }
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'An unexpected error has occurred, could not update' });
    });

});
