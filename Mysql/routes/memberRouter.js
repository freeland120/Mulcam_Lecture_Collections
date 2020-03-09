const express = require("express");
const router = express.Router();
const member = require("../models").member;

router.post("/selectAll", (req, res) => {
  //DB에 다녀와야 함
  member
    .findAll({})
    .then(members => {
      console.log(members);
      res.json({ message: members });
    })

    .catch(err => {
      console.log(err);
      res.json({ message: "db select err" });
    });
});

module.exports = router;
