let titulo = document.getElementById("encabezado");
console.log(titulo.innerHTML)

let contenido = document.getElementById("parrafo1")
contenido.style.color = "red";
console.log(parrafo1);

let parrafo2 = document.getElementsByName("parrafo2");
parrafo2[0].style.textAlign = "right";

let nuevoParrafo = document.createElement("p");
let textParrafo =  document.createTextNode("Esto es un ejemplo de texto por JS");
let datoNuevo = document.getElementById("datos");
datoNuevo.appendChild(nuevoParrafo);
nuevoParrafo.appendChild(textParrafo);

function validar(){
    let nombre = document.getElementById("nombre").value;
    let radios = document.getElementsByName("programar");
    let estudia = document.getElementById("estudiante");
    let valorRario = "";
    for(let a = 0; a < radios.length; a++){
        if(radios[a].checked){
            valorRario = radios[a].value;
        }
    }
    if(estudia.checked){
        estudia = "Si";
    } else {
        estudia = "No";
    }
    console.log("Nombre: " + nombre + " Sabe programar: " + valorRario + " Es estudiante: " + estudia )
}
function limpiar(){
    document.getElementById("nombre").value = "";
    let radios = document.getElementsByName("programar");

    for(let a = 0; a < radios.length; a++){
        if(radios[a].checked){
            radios[a].checked = false;
        }
    }
    document.getElementById("estudiante").checked = false;
}