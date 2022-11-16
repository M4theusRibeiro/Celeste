var express = require("express");
var router = express.Router();

var rankingController = require("../controllers/rankingController");

router.post("/recorde", function (req, res) {
    rankingController.salvarRecorde(req, res);
});


module.exports = router;