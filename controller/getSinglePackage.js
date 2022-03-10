const quotation = require("../models/index");

exports.SinglePackages = async function (req, res, next) {
  try {
    const { id } = req.query;
    if (id) {
      const SingleAllPackages = await quotation.findOne({ _id: id });
      if (SingleAllPackages)
        return res.json({
          success: true,
          SingleAllPackages: SingleAllPackages,
        });
      else return res.json({ success: false, message: "No data found " });
    } else
      return res.json({ success: false, message: "Please pass id of package" });
  } catch (err) {
    console.log(err);
  }
};
