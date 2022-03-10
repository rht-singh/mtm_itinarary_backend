const quotation = require("../models/index");
const fs = require("fs");
exports.deletePackages = async function (req, res, next) {
  try {
    const { id } = req.query;
    if (id) {
      const remove = await quotation.findOneAndRemove({ _id: id });
      console.log(remove.img_url);
      fs.unlink(`uploads/` + remove.img_url, (err) => {
        if (err) throw err;
        else {
          res.json({
            success: true,
            message: "Deleted an quotation successfully",
          });
        }
      });
    } else
      return res.json({
        success: false,
        message: "Please provide id to delete an quotation",
      });
  } catch (err) {
    console.log(err);
  }
};
