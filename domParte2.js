/*
let tabla = document.getElementById("tablaProducto");
console.log(tabla)
let atributos = tabla.attributes;*/ 

/*Muestro los attributos de mi tabla
for (let a = 0; a < atributos.length; a++){
    console.log(atributos[a])
}*/

//Muestro los nodos de mi tabla
/*let nodosTabla = tabla.childNodes;
console.log(nodosTabla);*/
function agregarFila(){
    let tabla = document.getElementById("tablaProducto");
    /*
    let tablaRef = tabla.getElementsByTagName("tbody")[0];
    let nuevaFila = tablaRef.insertRow(tablaRef.rows.length);
    let celdaUno = nuevaFila.insertCell(0);
    celdaUno.innerText = "1234568";
    let celdaDos = nuevaFila.insertCell(1);
    celdaDos.innerText = "Pan";
    let celdaTres = nuevaFila.insertCell(2);
    celdaTres.innerText = "20.00" ;*/

    /*
    let fila = "<td>1345354351</td><td>Aceite</td><td>25.00</td>"
    let crearFila = document.createElement("tr");
    crearFila.innerHTML = fila;
    tabla.appendChild(crearFila);*/

    let numFila = tabla.rows.length;
    tabla.insertRow(numFila).innerHTML = "<td>" + numFila + "</td><td>Botana</td><td>25.00</td><td><button type='button' id='eliminar' onclick='eliminarFila(this)'>Eliminar</button></td>";
}

function eliminarFila(celda){
    let fila = celda.parentNode.parentNode;
    fila.parentNode.removeChild(fila);
    
    /*
    let tabla = document.getElementById("tablaProducto");
    let numFila = tabla.rows.length - 1;
    tabla.deleteRow(numFila);*/
}