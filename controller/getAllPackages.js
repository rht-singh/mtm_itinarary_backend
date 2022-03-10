const quotation = require("../models/index");

exports.getAllPackages = async function (req, res, next) {
  try {
    const getAllPackages = await quotation.find();
    if (getAllPackages.length)
      return res.json({ success: true, getAllPackages: getAllPackages });
    else return res.json({ success: false, message: "No data found " });
  } catch (err) {
    console.log(err);
  }
};
