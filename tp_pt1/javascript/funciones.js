var ValidarCamposVacios = function (id) {
    var elementoObtenido = document.getElementById(id).value;
    if (elementoObtenido != "") {
        return true;
    }
    else {
        return false;
    }
};
var ValidarRangoNumerico = function (valorASerValidado, min, max) {
    if (valorASerValidado >= min && valorASerValidado <= max) {
        return true;
    }
    else {
        return false;
    }
};
var ValidarCombo = function (id, valorIncorrecto) {
    var elementoObtenido = document.getElementById(id).value;
    if (elementoObtenido == valorIncorrecto) {
        return false;
    }
    else {
        return true;
    }
};
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
var AdministrarValidaciones = function () {
    if ( //!ValidarCamposVacios("txtDni") ||  YA LOS VALIDA LAS FUNCIONES POSTERIORES
    !ValidarCamposVacios("txtApellido") ||
        !ValidarCamposVacios("txtNombre")
    //!ValidarCamposVacios("txtLegajo") ||
    //!ValidarCamposVacios("txtSueldo"))
    ) {
        alert("Un campo o varios están vacios");
    }
    var dniObtenido = document.getElementById("txtDni").value;
    var legajoObtenido = document.getElementById("txtLegajo").value;
    var sueldoObtenido = document.getElementById("txtSueldo").value;
    var sueldoMax = ObtenerSueldoMaximo(ObtenerTurnoSeleccionado());
    if (!ValidarRangoNumerico(parseInt(dniObtenido), 1000000, 55000000)) {
        alert("Dni incorrecto.");
    }
    if (!ValidarRangoNumerico(parseInt(legajoObtenido), 100, 150)) {
        alert("Legajo incorrecto.");
    }
    if (!ValidarRangoNumerico(parseInt(sueldoObtenido), 8000, sueldoMax)) {
        alert("Sueldo incorrecto.");
    }
    if (!ValidarCombo("cboSexo", "---")) {
        alert("Seleccione sexo");
    }
};
