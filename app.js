const express = require("express");
const cors = require("cors");
const routing = require("./routes/index.js");
const helmet = require("helmet");
const compression = require("compression");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet(), compression());

// app.use(express.static("./uploads"));
const directory = path.join(__dirname, "/uploads/file");
app.use(express.static(directory));
app.use("/api/v1", routing);

app.get("/api", (req, res) => {
  res.json({ msg: "backend working fine" });
});

module.exports = app;
