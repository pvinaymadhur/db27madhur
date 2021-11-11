// var express = require("express");
// var router = express.Router();

// /* GET home page. */
// router.get("/", function (req, res, next) {
//   res.render("rollsroyce", { title: "Search Results Rollsroyce" });
// });

// module.exports = router;

var express = require("express");

const rollsroyce_controlers = require("../controllers/rollsroyce");

var router = express.Router();



/* GET rollsroyce */

router.get("/", rollsroyce_controlers.rollsroyce_view_all_Page);

module.exports = router;