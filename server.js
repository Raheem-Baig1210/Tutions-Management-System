const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.listen(5001, () => console.log("Server started successfully ....!!!"));

app.use(express.json());

app.use(require("./routes/route"));

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("DB is connected successfully....!!!!"))
  .catch((err) => console.log(err));