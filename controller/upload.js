const quotation = require("../models/index.js");
const joiValidate = require("../models/joi.schema.js");

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
    if (!photo) {
      await joiValidate.validateAsync(req.body, { abortEarly: false });
      const create = new quotation({
        title,
        amount,
        durations,
        package_start_Place,
        min_age,
        img_url,
        max_guest,
        img_url: req.body.img_url,
      });
      await create.save();
      res.json({ sucess: true, quotation: "Created successfully" });
    }
    let url = `${req.protocol}://${req.get("host")}`;
    const img_url = `url/${req.file.filename}`;
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
