const mysql = require('mysql');

function executeQuery(query) {
  const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'sales',
  });
  return new Promise((resolve) => {
    connection.connect((err) => {
      if (err) {
        resolve({ error: true });
      } else {
        connection.query(query, (error, rows, _fields) => {
          if (!error) {
            const result = Array.from(rows);
            resolve({
              data: result
            });
          } else {
            resolve({ error: true });
          }
        });
      }
      connection.end();
    });
  });
}

module.exports = executeQuery;