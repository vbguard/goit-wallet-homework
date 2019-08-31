module.exports = {
  PORT: process.env.PORT || 5001,
  DB_DATABASE: "wallet",
  DB_SQL_URL: process.env.DB_URL || "http://localhost:3306/",
  DB_SQL_USER: process.env.DB_USER || "user",
  DB_SQL_PASSWORD: process.env.DB_SQL_PASSWORD || "password",
  DB_MONGO_URL: process.env.DB_URL || "mongodb://localhost:27017/",
  DB_MONGO_USER: process.env.DB_USER || "user",
  DB_MONGO_PASSWORD: process.env.DB_SQL_PASSWORD || "password"
};
