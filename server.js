const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.listen(5001, () => console.log("Server started successfully ....!!!"));

app.use(express.json());

app.use(require("./routes/route"));

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("DB is connected successfully....!!!!"))
  .catch((err) => console.log(err));

  //process.env.MONGODB_URL