const router = require("express").Router();
const multer = require("multer");
const { getAllPackages } = require("../controller/getAllPackages.js");
const { SinglePackages } = require("../controller/getSinglePackage.js");
const { login } = require("../controller/login.js");
const { search } = require("../controller/searchPackage.js");
const { createItinarary } = require("../controller/upload.js");
const { deletePackages } = require("../controller/delete.js");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + ".png");
  },
});

const upload = multer({ storage: storage });

router.route("/search").get(search);
router.route("/login").get(login);
router.route("/createItinarary").post(upload.single("photo"), createItinarary);
router.route("/getAllPackages").get(getAllPackages);
router.route("/delete-Quotation").delete(deletePackages);
router.route("/getSinglePackage").get(SinglePackages);

module.exports = router;
