System.register("validaciones", [], function (exports_1, context_1) {
    "use strict";
    var ValidarCamposVacios, ValidarRangoNumerico, ValidarCombo, ObtenerTurnoSeleccionado, ObtenerSueldoMaximo;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("ValidarCamposVacios", ValidarCamposVacios = function (id) {
                var elementoObtenido = document.getElementById(id).value;
                elementoObtenido = elementoObtenido.replace(/ /g, "");
                if (elementoObtenido != "") {
                    return true;
                }
                else {
                    return false;
                }
            });
            exports_1("ValidarRangoNumerico", ValidarRangoNumerico = function (valorASerValidado, min, max) {
                if (valorASerValidado >= min && valorASerValidado <= max) {
                    return true;
                }
                else {
                    return false;
                }
            });
            exports_1("ValidarCombo", ValidarCombo = function (id, valorIncorrecto) {
                var elementoObtenido = document.getElementById(id).value;
                if (elementoObtenido == valorIncorrecto) {
                    return false;
                }
                else {
                    return true;
                }
            });
            exports_1("ObtenerTurnoSeleccionado", ObtenerTurnoSeleccionado = function () {
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
            });
            exports_1("ObtenerSueldoMaximo", ObtenerSueldoMaximo = function (valorTurno) {
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
            });
        }
    };
});
System.register("funcion_general", ["validaciones"], function (exports_2, context_2) {
    "use strict";
    var validaciones_1, AdministrarValidaciones;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (validaciones_1_1) {
                validaciones_1 = validaciones_1_1;
            }
        ],
        execute: function () {
            AdministrarValidaciones = function () {
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
        }
    };
});
