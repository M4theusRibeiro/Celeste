var express = require("express");
var router = express.Router();

var comentariosController = require("../controllers/comentariosController");

router.get("/", function (req, res) {
    comentariosController.testar(req, res);
});

router.get("/listar", function (req, res) {
    comentariosController.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    comentariosController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    comentariosController.pesquisarDescricao(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    comentariosController.publicar(req, res);
});

router.put("/editar/:idcomentarios", function (req, res) {
    comentariosController.editar(req, res);
});

router.delete("/deletar/:idcomentarios", function (req, res) {
    comentariosController.deletar(req, res);
});

module.exports = router;