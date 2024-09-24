"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filmeRouter = void 0;
var _express = _interopRequireDefault(require("express"));
var _filmeController = require("../controllers/filme.controller.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = _express["default"].Router();
router.post('/filmes', function (req, res) {
  var _req$body = req.body,
    titulo = _req$body.titulo,
    genero = _req$body.genero,
    ano = _req$body.ano,
    descricao = _req$body.descricao;
  var novoFilme = (0, _filmeController.criarFilme)(titulo, genero, ano, descricao);
  res.status(201).json(novoFilme);
});
router.get('/filmes', function (req, res) {
  var filmes = (0, _filmeController.listarFilmes)();
  res.status(200).json(filmes);
});
router.get('/filmes/:id', function (req, res) {
  var id = req.params.id;
  var filme = (0, _filmeController.buscarPorId)(parseFloat(id));
  if (filme) {
    res.status(200).json(filme);
  } else {
    res.status(404).send('Filme não encontrado');
  }
});
router.put('/filmes/:id', function (req, res) {
  var id = req.params.id;
  var dadosAtualizados = req.body;
  var filmeAtualizado = (0, _filmeController.atualizarFilme)(parseFloat(id), dadosAtualizados);
  if (filmeAtualizado) {
    res.status(200).json(filmeAtualizado);
  } else {
    res.status(404).send('Filme não encontrado');
  }
});
router["delete"]('/filmes/:id', function (req, res) {
  var id = req.params.id;
  var filmeDeletado = (0, _filmeController.deletarFilme)(parseFloat(id));
  if (filmeDeletado) {
    res.status(200).json(filmeDeletado);
  } else {
    res.status(404).send('Filme não encontrado');
  }
});
router.get('/filmes/genero/:genero', function (req, res) {
  var genero = req.params.genero;
  var filmes = (0, _filmeController.buscarFilmesPorGenero)(genero);
  if (filmes.length > 0) {
    res.status(200).json(filmes);
  } else {
    res.status(404).send('Nenhum filme encontrado para o gênero especificado');
  }
});
var filmeRouter = exports.filmeRouter = router;