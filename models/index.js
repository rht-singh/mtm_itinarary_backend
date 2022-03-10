const mongoose = require("mongoose");

const Itinarary = mongoose.Schema({
  title: {
    type: String,
    default: null,
  },
  durations: {
    type: String,
    default: null,
  },
  amount: {
    type: String,
    default: null,
  },
  img_url: {
    type: String,
    default: null,
  },
  quotation: {
    type: String,
    default: null,
  },
  package_start_Place: {
    type: String,
    default: null,
  },
  min_age: {
    type: String,
  },
  max_guest: {
    type: String,
  },
  create_at: {
    type: Date,
    default: new Date().toString(),
  },
});

const quotation = new mongoose.model("itinarary", Itinarary);
module.exports = quotation;
