const model = require("../config/model/index"); // path to model
const controller = {};

controller.getAll = async function (req, res) {
  try {
    await model.mahasiswa.findAll().then((result) => {
      if (result.length > 0) {
        res.status(200).json({
          message: "Get Method Mahasiswa",
          data: result,
        });
      } else {
        res.status(200).json({
          message: "Data Mahasiswa Tidak Ditemukan",
          data: [],
        });
      }
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      data: err,
    });
  }
};

module.exports = controller;
