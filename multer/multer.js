const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "/tmp"));
  },
  filename: function (req, file, cb) {
    cb(null, "abc.csv");
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
