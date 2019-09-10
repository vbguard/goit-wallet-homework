


module.exports = {
  "development": {
    "username": "kLtnk2xqwN",
    "password": "Lw8Zr7l2Dv",
    "database": "kLtnk2xqwN",
    "host": "remotemysql.com",
    "port": 3306,
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": process.env.SQL_DB_USER,
    "password": process.env.SQL_DB_PASS,
    "database": process.env.SQL_DB_NAME,
    "host": process.env.SQL_DB_HOST,
    "dialect": process.env.SQL_DB_DIALECT,
    "operatorsAliases": false
  }
};
