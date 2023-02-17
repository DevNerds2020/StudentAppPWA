import mysql from 'mysql';

const createConnection = () => {
  const connection = mysql.createConnection({
    host: 'localhost',
    port: 3309,
    user: 'root',
    database: 'farzaneganhighschool',
    password: 'password',
  });

  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to Db');
      return;
    }
    console.log('Connection established');
  });
  return connection;
};

export default createConnection;
