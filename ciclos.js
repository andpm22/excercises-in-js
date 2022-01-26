function generarTabla(numero){
     let num = parseInt(numero);
     let tabla = document.getElementById("tabla");
     tabla.innerHTML = '';
     for(let contador = 1; contador <= 10; contador ++){
        let resultado = contador * num;

        let fila = tabla.insertRow(tabla.rows.length);
        let celda = fila.insertCell(0);
        celda.innerHTML = contador + " * " + num + " = " + resultado;
    }
}

function generarTablaWhile(numero){
    let num = parseInt(numero);
    let tabla = document.getElementById("tabla");

    let contador = 1;
    while( contador <= 10){
       let resultado = contador * num;

       let fila = tabla.insertRow(contador - 1);
       let celda = fila.insertCell(0);
       celda.innerHTML = contador + " * " + num + " = " + resultado;
       contador ++;
   }
}


function generarTablaDoWhile(numero){
    let num = parseInt(numero);
    let tabla = document.getElementById("tabla");
    let contador = 1;
    do{
       let resultado = contador * num;

       let fila = tabla.insertRow(contador - 1);
       let celda = fila.insertCell(0);
       celda.innerHTML = contador + " * " + num + " = " + resultado;
       contador ++;
    }
    while( contador <= 10);
}

function sumarNumero(numero){
    let numeroFinal = parseInt(numero);
    let numeroInicial = 1;
    let resultado = 0;

    while(numeroInicial <= numeroFinal){
       
        resultado += numeroInicial;
        numeroInicial++;
    }

    document.getElementById("resultado").innerText = resultado;


}

function deletrearNombre(nombre){
    let resultado = '';
    for(let letra of nombre){
        resultado += letra + "\n";
    }
    document.getElementById("deletreo").innerText = resultado;
}