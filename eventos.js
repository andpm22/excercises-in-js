function random(numero){
    return Math.floor(Math.random() * (numero + 1));

}

function cambiarFondo(){
    let color = 'rgb('+random(255)+','+random(255)+','+random(255)+')';
    document.body.style.backgroundColor = color;
}


let btn = document.getElementById("btn");
/*btn.onclick = cambiarFondo;*/
btn.addEventListener('click', cambiarFondo)
/*btn.removeEventListener('click', cambiarFondo) elimino su evento */
/*btn.onclick = function() {
    let color = 'rgb('+random(255)+','+random(255)+','+random(255)+')';
    document.body.style.backgroundColor = color;
}*/


let txtNombre = document.getElementById("nombre");
let txtEmail= document.getElementById("email");
let chkEstudiante = document.getElementById("estudiante");
let selNivel = document.getElementById("nivel");
let divNivel = document.getElementById("nivelEstudiante");

txtNombre.onkeyup = function() {
    document.getElementById("lnombre").innerText = txtNombre.value;
}

txtEmail.onfocus = function(){
    document.getElementById('lemail').innerText = "En foco";
}
txtEmail.onblur = function(){
    document.getElementById('lemail').innerText = "Salio del foco";
}

chkEstudiante.onchange = function(){
    if(chkEstudiante.checked){
        divNivel.style.display = "inline";
    } else {
        divNivel.style.display = "none";
    }
}

selNivel.onchange = function(){
    alert(selNivel.value);
}

let formulario = document.getElementById("formulario");
formulario.onsubmit = function () {
    if (txtNombre.value == "" || txtEmail.value == ""){
        alert("Llene todos los campos");
        return false;
    }
}