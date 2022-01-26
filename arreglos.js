var colores = ["Rojo", "Verde", "Azul"];
console.log(colores[1]);

var frutas = new Array();
frutas[0] = "Melon";
console.log(frutas[0]);

var numero = new Array(2);
numero[0] = 1;
numero[1] = 2;
console.log(numero.length);
let tamanio = numero.length
for(let indice = 0; indice < tamanio; indice++){
    console.log(numero[indice])
}
for(let num in numero){
    console.log(num + " = " + numero[num]);

}


var carros = new Array("Toyota", "Suzuki");


var matrixFila = new Array();
for(let x = 0; x<=10; x++){
    matrixFila[x] = new Array();
    for(let y = 0; y<=10; y++){
        matrixFila[x][y] = x + y;
        
    }
}

for(let elemento in matrixFila){
    console.log(elemento + " = " + matrixFila[elemento])
}
