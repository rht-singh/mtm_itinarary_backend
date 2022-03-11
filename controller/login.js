const quotation = require("../models/index.js");

exports.login = function (req, res) {
  try {
    const { mail, password } = req.body;
    if (mail === "sales@mytourmakers.com" && password === "not7that") {
      return res.json({
        success: true,
        message: "logged in",
      });
    } else res.json({ success: false, message: "Please check credentials" });
  } catch (err) {
    console.log(err);
  }
};
