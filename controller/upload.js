const quotation = require("../models/index.js");
const joiValidate = require("../models/joi.schema.js");

exports.createItinarary = async (req, res, next) => {
  try {
    const file = req.file;
    const {
      title,
      amount,
      durations,
      package_start_Place,
      min_age,
      max_guest,
      img_url,
    } = req.body;
    const pdf_url = `/${req.file.filename}`;
    await joiValidate.validateAsync(req.body, { abortEarly: false });
    const create = new quotation({
      title,
      amount,
      durations,
      package_start_Place,
      min_age,
      quotation: pdf_url,
      img_url,
      max_guest,
    });
    await create.save();
    res.json({ sucess: true, quotation: "Created successfully" });
  } catch (err) {
    console.log(err);
  }
};
