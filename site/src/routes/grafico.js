var express = require("express");
var router = express.Router();

var graficoController = require("../controllers/graficoController");


router.get("/obter", function (req, res) {
    graficoController.obterGrafico(req, res);
})

router.get("/obterGraficoSentimento", function (req, res) {
    graficoController.obterGraficoSentimento(req, res);
})


module.exports = router;