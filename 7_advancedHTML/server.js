const express = require("express");
const path = require("path");
const multer = require("multer");
const fs = require("fs"); //파일 시스템

const app = express();

app.use(express.static(path.join(__dirname, "public")));

fs.readdir("uploads", error => {
  if (error) {
    console.log("upload 폴더가 없어서 upload폴더를 생성합니다.");
    fs.mkdirSync("uploads");
  } else {
    console.log("폴더가 있습니다.");
  }
});

multer({
  storage: multer.diskStorage(),
  limits: {}
});

app.listen(8080, () => {
  console.log("8080 Server ready✅");
});
