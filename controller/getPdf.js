const quotation = require("../models/index.js");
const path = require("path");

exports.getPdf = async function (req, res, next) {
  try {
    const { gender, name, amount, min_guest, id } = req.body;
    if (amount && name) {
      const getData = await quotation.findOne({ _id: id });
      if (!getData) throw new Error("Data Not found");
      const file = `http://localhost:8080/${getData.quotation}`;
    } else
      return res.json({
        success: false,
        message: "Please provide data",
      });
  } catch (err) {
    console.log(err.message);
  }
};
