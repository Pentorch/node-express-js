const express = require("express");
const app = require("../app");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Get Method Mahasiswa",
  });
});
router.post("/", (req, res, next) => {
  res.status(200).json({
    message: "Post Method Mahasiswa",
  });
});
router.get("/:nim", (req, res, next) => {
  const nim = req.params.nim;
  if (nim === "123") {
    res.status(200).json({
      message: "NIM 123",
    });
  } else {
    res.status(200).json({
      message: "NIM OTHER",
    });
  }
  res.status(200).json({
    message: "Post Method Mahasiswa",
  });
});

router.put("/", (req, res, next) => {
  res.status(200).json({
    message: "Put Method Mahasiswa",
  });
});
router.delete("/", (req, res, next) => {
  res.status(200).json({
    message: "Delete Method Mahasiswa",
  });
});

module.exports = router;
