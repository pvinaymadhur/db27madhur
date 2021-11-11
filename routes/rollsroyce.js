var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("rollsroyce", { title: "Search Results Rollsroyce" });
});

module.exports = router;