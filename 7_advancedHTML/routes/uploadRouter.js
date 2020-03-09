const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const router = express.Router();

fs.readdir("uploads", error => {
  if (error) {
    console.log("uploads 폴더 생성");
    fs.mkdirSync("uploads");
  }
});

const a = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, "uploads/");
    },
    filename(req, file, cb) {
      const ext = path.extname(file.originalname);
      console.log(ext);
      cb(
        null,
        path.basename(file.originalname, ext) + new Date().valueOf() + ext
      );
    }
  }),
  limits: { fileSize: 5 * 1024 * 1024 }
});

router.post("/img", a.single("b"), (req, res) => {
  console.log(req.file);
  res.end("file upload ok");
});

module.exports = router;
