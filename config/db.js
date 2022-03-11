const mongoose = require("mongoose");
const dotenv = require("dotenv");
const mongodb = process.env.mongodb;
dotenv.config();

const MONGODB=process.env.mongodb
mongoose.connect(
  MONGODB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) throw err;
    else console.log("Mongo connected");
  }
);
