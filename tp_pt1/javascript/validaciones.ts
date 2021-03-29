
 var ValidarCamposVacios : Function = (id : string) : boolean =>
{
    let elementoObtenido :string =  (<HTMLInputElement> document.getElementById(id)).value;
    elementoObtenido = elementoObtenido.replace(/ /g,"");

    if(elementoObtenido != "")
    {
        return true;
    }
    else
    {
       
        return false;
    }

}

 var ValidarRangoNumerico : Function = (valorASerValidado : number , min : number, max: number) : boolean =>
{
    if(valorASerValidado >= min && valorASerValidado <= max)
    {
        return true;
    }
    else
    {   
        return false;
    }
}
 var ValidarCombo : Function = (id : string , valorIncorrecto : string) : boolean =>
{
    const elementoObtenido :string =  (<HTMLInputElement> document.getElementById(id)).value;

    if(elementoObtenido == valorIncorrecto)
    {
        return false;
    }
    else
    {
        return true;
    }

}
 var ObtenerTurnoSeleccionado : Function = () : string =>
{
    const obtenido : NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name="rdoTurno"]'); //Selecciona todos los input que tengan nombre "rdoTurno"
    var valor : number = 0;

    for(let i : number = 0; i < obtenido.length;i++)
    {
        if(obtenido[i].checked)
        {
            valor = parseInt(obtenido[i].value);
        }
    } 
   switch(valor)
   {
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
}
 var ObtenerSueldoMaximo : Function = (valorTurno : string) : number => 
{
   switch(valorTurno)
   {
       case "Mañana":
           return 20000
           break;
        case "Tarde":
            return 18500
            break;
        default:
            return 25000
            break;
   }

}

