/* eslint-disable import/extensions */
import express from 'express';
import createConnection from './db-connect.js';

const app = express();
const connection = createConnection();
// connect to mysql
app.get('/users', (req, res) => {
  connection.query('SELECT * FROM users', (err, rows) => {
    if (err) throw err;
    res.send(rows);
  });
});

app.get('/users/:id', (req, res) => {
  connection.query(
    `SELECT * FROM users WHERE id = ${req.params.id}`,
    (err, rows) => {
      if (err) throw err;
      res.send(rows);
    },
  );
});

// login user
app.post('/users/login', (req, res) => {
  connection.query(
    `SELECT * FROM users WHERE username = ${req.body.username} AND password = ${req.body.password}`,
    (err, rows) => {
      if (err) res.send({ error: 'User not found', status: 404 });
      res.send(rows);
    },
  );
});

// register user
app.post('/users/register', (req, res) => {
  connection.query(
    `INSERT INTO users (username, email, password) VALUES (${req.body.username}, ${req.body.email}, ${req.body.password})`,
    (err, rows) => {
      if (err) res.send({ error: 'User not found', status: 404 });
      res.send(rows);
    },
  );
});

app.listen(3001, () => {
  console.log('listening on port 3001');
});
