require("dotenv").config();
const express = require("express");
const cors = require("cors");
require("./config/database");
const constants = require("./constants.js");

const router = require("./route/index.js");

const app = express();
app.listen(constants.port, () => {
  console.log("server created on port " + constants.port);
});

app.use(cors());
app.use(express.json());

app.use("/api", router);
