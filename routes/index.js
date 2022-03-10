const router = require("express").Router();
const multer = require("multer");
const { getAllPackages } = require("../controller/getAllPackages");
const { SinglePackages } = require("../controller/getSinglePackage");
const { login } = require("../controller/login");
const { search } = require("../controller/searchPackage");
const { createItinarary } = require("../controller/upload");
const { deletePackages } = require("../controller/delete");

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
