const pgp = require('pg-promise')();

let db = false;

const getConnection = () => {
  const connection = 'postgres://postgres:kostopinto750@localhost:5432/kostia';
  if (!db) {
    db = pgp(connection);
  }
  return db;
};

module.exports = {
  getConnection
};
