var express = require("express");
var router = express.Router();

var rankingController = require("../controllers/rankingController");

router.get("/listar", function (req, res) {
    rankingController.listar(req, res);
});

router.post("/recorde", function (req, res) {
    rankingController.salvarRecorde(req, res);
});

module.exports = router;