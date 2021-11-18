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

/* GET detail costume page */
 router.get('/detail', rollsroyce_controlers.rollsroyce_view_one_Page);
/* GET create costume page */
router.get('/create', rollsroyce_controlers.rollsroyce_create_Page);
/* GET create update page */
router.get('/update', rollsroyce_controlers.rollsroyce_update_Page);
/* GET create costume page */
router.get('/delete', rollsroyce_controlers.rollsroyce_delete_Page);
module.exports = router;