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

// A little function to check if we have an authorized user and continue on
// or;
// redirect to login.
const secured = (req, res, next) => {
    if (req.user) {
      return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
  };


/* GET rollsroyce */

 router.get("/", rollsroyce_controlers.rollsroyce_view_all_Page);

/* GET detail costume page */
 router.get('/detail', rollsroyce_controlers.rollsroyce_view_one_Page);
/* GET create costume page */
router.get('/create',secured, rollsroyce_controlers.rollsroyce_create_Page);
/* GET create update page */
router.get('/update',secured, rollsroyce_controlers.rollsroyce_update_Page);
/* GET create costume page */
router.get('/delete',secured, rollsroyce_controlers.rollsroyce_delete_Page);
module.exports = router;