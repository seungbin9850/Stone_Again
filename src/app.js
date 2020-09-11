const express = require("express");
const { sequelize } = require("./models");
const logger = require("morgan");
const cors = require("cors");

const app = express();

require("dotenv").config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger("dev"));
app.use(cors());

sequelize.sync();

app.listen(3000, () => {
  console.log("server on");
});
