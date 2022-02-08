const Sequelize = require("sequelize");
const db = require("../database/mysql"); // path to db

var mahasiswa = db.define(
  "mahasiswa",
  {
    nim: Sequelize.INTEGER, // define column nim
    nama: Sequelize.STRING, // define column nama
    jurusan: Sequelize.STRING, // define column jurusan
  },
  {
    freezeTableName: true, // disable plural table name
    timestamps: false,
  }
);

mahasiswa.removeAttribute("id");
module.exports = mahasiswa;
