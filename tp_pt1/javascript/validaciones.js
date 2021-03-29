"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObtenerSueldoMaximo = exports.ObtenerTurnoSeleccionado = exports.ValidarCombo = exports.ValidarRangoNumerico = exports.ValidarCamposVacios = void 0;
var ValidarCamposVacios = function (id) {
    var elementoObtenido = document.getElementById(id).value;
    elementoObtenido = elementoObtenido.replace(/ /g, "");
    if (elementoObtenido != "") {
        return true;
    }
    else {
        return false;
    }
};
exports.ValidarCamposVacios = ValidarCamposVacios;
var ValidarRangoNumerico = function (valorASerValidado, min, max) {
    if (valorASerValidado >= min && valorASerValidado <= max) {
        return true;
    }
    else {
        return false;
    }
};
exports.ValidarRangoNumerico = ValidarRangoNumerico;
var ValidarCombo = function (id, valorIncorrecto) {
    var elementoObtenido = document.getElementById(id).value;
    if (elementoObtenido == valorIncorrecto) {
        return false;
    }
    else {
        return true;
    }
};
exports.ValidarCombo = ValidarCombo;
var ObtenerTurnoSeleccionado = function () {
    var obtenido = document.querySelectorAll('input[name="rdoTurno"]'); //Selecciona todos los input que tengan nombre "rdoTurno"
    var valor = 0;
    for (var i = 0; i < obtenido.length; i++) {
        if (obtenido[i].checked) {
            valor = parseInt(obtenido[i].value);
        }
    }
    switch (valor) {
        case 0:
            return "Mañana";
            break;
        case 1:
            return "Tarde";
            break;
        default:
            return "Noche";
            break;
    }
};
exports.ObtenerTurnoSeleccionado = ObtenerTurnoSeleccionado;
var ObtenerSueldoMaximo = function (valorTurno) {
    switch (valorTurno) {
        case "Mañana":
            return 20000;
            break;
        case "Tarde":
            return 18500;
            break;
        default:
            return 25000;
            break;
    }
};
exports.ObtenerSueldoMaximo = ObtenerSueldoMaximo;
//# sourceMappingURL=validaciones.js.map