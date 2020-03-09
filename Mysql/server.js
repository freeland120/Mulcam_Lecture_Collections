const express = require("express");
const app = express();
const path = require("path");
const sequelize = require("./models").sequelize;
sequelize.sync();

//const hey = require("./routes/memberRouter");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/member", require("./routes/memberRouter"));

//app.use("/member", hey);

app.listen(7777, () => {
  console.log("7777 Server ready...");
});
