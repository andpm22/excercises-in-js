/*  EJ3 */
function resultadoOperacion(datoUno, datoDos){
    let numUno = parseInt(datoUno);
    let numDos = parseInt(datoDos);
    let resultado = numUno + numDos;
    document.getElementById("resultado").value = resultado;
}

function resultadoOperacionMultiplicacion(){
    let numUno = parseInt(document.getElementById("numeroUno").value);
    let numDos = parseInt(document.getElementById("numeroDos").value);
    let resultado = numUno * numDos;
    document.getElementById("resultado").value = resultado;
}

function incrementar() {
    let numUno = parseInt(document.getElementById("numeroUno").value);
    numUno ++;
    document.getElementById("numeroUno").value = numUno;
}

restar = () => {
    let numDos = parseInt(document.getElementById("numeroDos").value);
    numDos --;
    document.getElementById("numeroDos").value = numDos;
}

comparacion = () => { 
    let numUno = parseInt(document.getElementById("numeroUno").value);
    let numDos = parseInt(document.getElementById("numeroDos").value);
    let respuesta = numUno === numDos ? "Iguales" : "Diferentes"
    document.getElementById("resultado").value = respuesta;
}