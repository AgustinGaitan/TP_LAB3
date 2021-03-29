"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validaciones_1 = require("./validaciones");
var AdministrarValidaciones = function () {
    if ( //!ValidarCamposVacios("txtDni") ||  YA LOS VALIDA LAS FUNCIONES POSTERIORES
    !validaciones_1.ValidarCamposVacios("txtApellido") ||
        !validaciones_1.ValidarCamposVacios("txtNombre")
    //!ValidarCamposVacios("txtLegajo") ||
    //!ValidarCamposVacios("txtSueldo"))
    ) {
        alert("Un campo o varios están vacios");
    }
    var dniObtenido = document.getElementById("txtDni").value;
    var legajoObtenido = document.getElementById("txtLegajo").value;
    var sueldoObtenido = document.getElementById("txtSueldo").value;
    var sueldoMax = validaciones_1.ObtenerSueldoMaximo(validaciones_1.ObtenerTurnoSeleccionado());
    if (!validaciones_1.ValidarRangoNumerico(parseInt(dniObtenido), 1000000, 55000000)) {
        alert("Dni incorrecto.");
    }
    if (!validaciones_1.ValidarRangoNumerico(parseInt(legajoObtenido), 100, 150)) {
        alert("Legajo incorrecto.");
    }
    if (!validaciones_1.ValidarRangoNumerico(parseInt(sueldoObtenido), 8000, sueldoMax)) {
        alert("Sueldo incorrecto.");
    }
    if (!validaciones_1.ValidarCombo("cboSexo", "---")) {
        alert("Seleccione sexo");
    }
};
//# sourceMappingURL=funcion_general.js.map