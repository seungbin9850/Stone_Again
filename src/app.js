const express = require("express");
const { sequelize } = require("./models");
const logger = require("morgan");
const cors = require("cors");
const schedule = require("./schedule");

const app = express();

require("dotenv").config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger("dev"));
app.use(cors());

app.use("/", require("./routes"));

app.set("jwt-secret", process.env.JWT_SECRET);
app.set("refresh-secret", process.env.REFRESH_SECRET);

sequelize.sync();

schedule.interval;

app.listen(3000, () => {
  console.log("server on");
});
