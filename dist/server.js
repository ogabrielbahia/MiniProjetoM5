"use strict";

var _express = _interopRequireDefault(require("express"));
var _filmeRoutes = require("./routes/filme.routes.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var app = (0, _express["default"])();
var port = 4000;
app.use(_express["default"].json());
app.use(_filmeRoutes.filmeRouter);
app.listen(port, function () {
  console.log("Aplica\xE7\xE3o ouvindo na porta ".concat(port));
});