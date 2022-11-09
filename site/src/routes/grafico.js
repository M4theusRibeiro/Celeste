var express = require("express");
var router = express.Router();

var graficoController = require("../controllers/graficoController");

router.get("/ultimas/:idUsuario", function (req, res) {
    graficoController.buscarUltimasgrafico(req, res);
});

router.get("/tempo-real/:idUsuario", function (req, res) {
    graficoController.buscarMedidasEmTempoReal(req, res);
})

module.exports = router;