const quotation = require("../models/index.js");

exports.search = async function (req, res) {
  try {
    const { search } = req.query;
    var regExp = /[a-zA-Z]/g;
    if (regExp.test(search)) {
      const getList = await quotation.find({
        title: { $regex: search, $options: "i" },
      });
      if (getList) return res.json({ success: true, getList: getList });
      else return res.json({ success: false, message: "No data found" });
    } else {
      const getList = await quotation.find({});
      if (getList) return res.json({ success: true, getList: getList });
      else return res.json({ success: false, message: "No data found" });
    }
  } catch (err) {
    console.log(err);
  }
};
