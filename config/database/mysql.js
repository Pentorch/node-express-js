var Sequelize = require("sequelize");
var db = new Sequelize("sks-kuliah", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
