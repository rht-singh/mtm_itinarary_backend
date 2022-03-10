const quotation = require("../models/index.js");

exports.search = async function (req, res) {
  try {
    const { search } = req.query;
    if (search?.length) {
      const getList = await quotation.find({
        title: { $regex: search, $options: "i" },
      });
      if (getList) return res.json({ success: true, getList: getList });
      else return res.json({ success: false, message: "No data found" });
    } else res.json({ success: false, message: "Please enter search value" });
  } catch (err) {
    console.log(err);
  }
};
