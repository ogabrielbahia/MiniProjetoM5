"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listarFilmes = exports.deletarFilme = exports.criarFilme = exports.buscarPorId = exports.buscarFilmesPorGenero = exports.atualizarFilme = void 0;
var _filmeModels = _interopRequireDefault(require("../models/filme.models.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var listaFilmes = [];
var inicializarFilmes = function inicializarFilmes() {
  listaFilmes.push(new _filmeModels["default"]('Pantera Negra', 'Ação', 2018, 'Um super-herói africano se torna o rei de Wakanda.'));
  listaFilmes.push(new _filmeModels["default"]('Amistad', 'Drama', 1997, 'Baseado em uma história real sobre a luta de escravos africanos pela liberdade.'));
  listaFilmes.push(new _filmeModels["default"]('12 Anos de Escravidão', 'Drama', 2013, 'A história de um homem negro livre sequestrado e vendido como escravo.'));
  listaFilmes.push(new _filmeModels["default"]('A Cor Púrpura', 'Drama', 1985, 'A luta de uma mulher afro-americana para encontrar sua identidade e independência.'));
  listaFilmes.push(new _filmeModels["default"]('Django Livre', 'Faroeste', 2012, 'Um escravo libertado se torna caçador de recompensas para resgatar sua esposa.'));
  listaFilmes.push(new _filmeModels["default"]('Selma', 'Drama', 2014, 'A luta pelos direitos civis liderada por Martin Luther King Jr.'));
  listaFilmes.push(new _filmeModels["default"]('Malcolm X', 'Biografia', 1992, 'A vida do ativista Malcolm X e sua luta por direitos iguais.'));
  listaFilmes.push(new _filmeModels["default"]('Black Panther: Wakanda Para Sempre', 'Ação', 2022, 'Sequência de Pantera Negra, abordando a perda e o legado de T\'Challa.'));
  listaFilmes.push(new _filmeModels["default"]('Get Out', 'Terror', 2017, 'Um jovem negro descobre um segredo aterrorizante durante uma visita à família de sua namorada.'));
  listaFilmes.push(new _filmeModels["default"]('Soul', 'Animação', 2020, 'A história de um músico que busca dar sentido à sua vida e entender o propósito de sua existência.'));
};
inicializarFilmes();
var criarFilme = exports.criarFilme = function criarFilme(titulo, genero, ano, descricao) {
  var filme = new _filmeModels["default"](titulo, genero, ano, descricao);
  listaFilmes.push(filme);
  return filme;
};
var listarFilmes = exports.listarFilmes = function listarFilmes() {
  return listaFilmes;
};
var buscarPorId = exports.buscarPorId = function buscarPorId(id) {
  return listaFilmes.find(function (filme) {
    return filme.id === id;
  });
};
var atualizarFilme = exports.atualizarFilme = function atualizarFilme(id, dadosAtualizados) {
  var filmeIndex = listaFilmes.findIndex(function (filme) {
    return filme.id === id;
  });
  if (filmeIndex !== -1) {
    listaFilmes[filmeIndex] = _objectSpread(_objectSpread({}, listaFilmes[filmeIndex]), dadosAtualizados);
    return listaFilmes[filmeIndex];
  }
  return null;
};
var deletarFilme = exports.deletarFilme = function deletarFilme(id) {
  var filmeIndex = listaFilmes.findIndex(function (filme) {
    return filme.id === id;
  });
  if (filmeIndex !== -1) {
    return listaFilmes.splice(filmeIndex, 1)[0];
  }
  return null;
};
var buscarFilmesPorGenero = exports.buscarFilmesPorGenero = function buscarFilmesPorGenero(genero) {
  return listaFilmes.filter(function (filme) {
    return filme.genero.toLowerCase() === genero.toLowerCase();
  });
};