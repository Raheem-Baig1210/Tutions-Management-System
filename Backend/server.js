const express = require("express");
const mongoose = require("mongoose");
const path = require("path")
const fs = require("fs")
const cors = require('cors');
require("dotenv").config();

const app = express();

app.listen(5001, () => console.log("Server started successfully ....!!!"));

app.use(express.json());
app.use(cors());

const uploadDir = path.join(__dirname,"uploads")
if(!fs.existsSync(uploadDir)){
  fs.mkdirSync(uploadDir)
}

app.use(require("./routes/route"));

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("DB is connected successfully....!!!!"))
  .catch((err) => console.log(err));

  //process.env.MONGODB_URL