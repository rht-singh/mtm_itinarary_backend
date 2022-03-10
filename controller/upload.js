const quotation = require("../models/index");
const joiValidate = require("../models/joi.schema");

exports.createItinarary = async (req, res, next) => {
  try {
    const photo = req.file;
    const {
      title,
      amount,
      durations,
      package_start_Place,
      min_age,
      max_guest,
    } = req.body;
    let url = `${req.protocol}://${req.get("host")}`;
    const img_url = `${req.file.filename}`;
    await joiValidate.validateAsync(req.body, { abortEarly: false });
    const create = new quotation({
      title,
      amount,
      durations,
      package_start_Place,
      min_age,
      img_url,
      max_guest,
    });
    await create.save();
    res.json({ sucess: true, quotation: "Created successfully" });
  } catch (err) {
    console.log(err);
  }
};
