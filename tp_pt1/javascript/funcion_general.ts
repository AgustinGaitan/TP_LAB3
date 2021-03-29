import { ValidarRangoNumerico, ValidarCamposVacios, ValidarCombo,
        ObtenerSueldoMaximo, ObtenerTurnoSeleccionado} from "./validaciones" ;


var AdministrarValidaciones : Function = () =>
{
    if(//!ValidarCamposVacios("txtDni") ||  YA LOS VALIDA LAS FUNCIONES POSTERIORES
       !ValidarCamposVacios("txtApellido") ||
       !ValidarCamposVacios("txtNombre")
       //!ValidarCamposVacios("txtLegajo") ||
       //!ValidarCamposVacios("txtSueldo"))
    )
    {
        alert("Un campo o varios están vacios");
    }

    let dniObtenido : string = (<HTMLInputElement> document.getElementById("txtDni")).value;
    let legajoObtenido : string = (<HTMLInputElement> document.getElementById("txtLegajo")).value;
    let sueldoObtenido : string = (<HTMLInputElement> document.getElementById("txtSueldo")).value;
    let sueldoMax : number = ObtenerSueldoMaximo(ObtenerTurnoSeleccionado());
    
    if(!ValidarRangoNumerico(parseInt(dniObtenido), 1000000, 55000000 ))
    {
        alert("Dni incorrecto.");
    }

    if(!ValidarRangoNumerico(parseInt(legajoObtenido),100,150))
    {
        alert("Legajo incorrecto.");
    }

    if(!ValidarRangoNumerico(parseInt(sueldoObtenido),8000,sueldoMax))
    {
        alert("Sueldo incorrecto.");
    }

    if(!ValidarCombo("cboSexo","---"))
    {
        alert("Seleccione sexo");
    }
   
}
