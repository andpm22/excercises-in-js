 function validarEdad(edad){
    if(edad >= 18){
        document.getElementById("respuesta").innerHTML = "Mayor de edad";
    } else {
        document.getElementById("respuesta").innerHTML = "Menor de edad";
    }
 }

 function validarNumeros(){
    let numeroUno = parseInt(document.getElementById("numUno").value);
    let numeroDos = parseInt(document.getElementById("numDos").value);
    let numeroTres = parseInt(document.getElementById("numTres").value);
    
    if (numeroUno > numeroDos){
        if (numeroUno > numeroTres){
            document.getElementById("mensaje").innerHTML = numeroUno + " es mayor";

        } else {
            document.getElementById("mensaje").innerHTML = numeroTres + " es mayor";
        }

    } else {
        if (numeroDos > numeroTres){
            document.getElementById("mensaje").innerHTML = numeroDos + " es mayor";
        } else {
            document.getElementById("mensaje").innerHTML = numeroTres + " es mayor";
        }
        
    }

}

function cambiarATexto(dia){
    let numDia = parseInt(dia);
    switch(numDia){
        case 1:
            return "Domingo";
        break;
        case 2:
            return "Lunes";
        break;
        case 3:
            return "Martes";
        break;
        case 4:
            return "Miercoles";
        break;
        case 5:
            return "Jueves";
        break;
        case 6:
            return "Viernes";
        break;
        case 7:
            return "Sabado";
        break;
        default: return "Ingrese un dia valido";
    }
}

function respuestaDia(dia){
    document.getElementById("mensajeDia").innerHTML = cambiarATexto(dia);
}