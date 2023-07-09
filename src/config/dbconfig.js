require("dotenv/config");
const { Sequelize } = require("sequelize");

// Sequelize Db connection:
const sequelize_db = new Sequelize(
  process.env.PG_DB,
  process.env.PG_USER,
  process.env.PG_PASSWORD,
 
  {
    host: process.env.PG_HOST,
    dialect: "postgres",
    port: process.env.PG_PORT,
    freezeTableName: true,
  }
);



module.exports = sequelize_db;
