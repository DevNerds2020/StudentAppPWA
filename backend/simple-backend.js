/* eslint-disable import/extensions */
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import createConnection from './db-connect.js';

const app = express();
const connection = createConnection();

app.use(cors()); // enable CORS for all routes
app.use(bodyParser.json()); // parse JSON request body
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
    `SELECT * FROM users WHERE username = '${req.body.username}' AND password = '${req.body.password}'`,
    (err, rows) => {
      if (err) res.send({ error: 'User not found', status: 404 });
      console.log('%c Line:35 🍩 err', 'color:#4fff4B', err, rows);
      res.send(rows);
    },
  );
});
// register user
app.post('/users/register', (req, res) => {
  console.log('%c Line:47 🍩 req', 'color:#fca650', req);
  connection.query(
    `INSERT INTO users (username, email, password) VALUES ('${req.body.name}', '${req.body.email}', '${req.body.password}')`,
    (err, rows) => {
      if (err) res.send({ error: 'User not found', status: 404 });
      res.send(rows);
    },
  );
});

app.listen(3001, () => {
  console.log('listening on port 3001');
});
