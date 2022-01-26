let usuario = {
    nombre: "Marco Robles", 
    email: "marco@test.com",
    edad: 24,
    telefono: 21212323
};
/*document.getElementById('datos').innerHTML = usuario.nombre;*/
document.getElementById('datos').innerHTML = usuario["email"];
console.log(usuario);

let texto = '{ "empleados": ['+
    '{"nombre": "Juank", "edad:": "23"},'+
    '{"nombre": "Mario", "edad:": "30"},'+
    '{"nombre": "Peter", "edad:": "20"}]}';
let obj = JSON.parse(texto);
const objString = JSON.stringify(obj);
document.getElementById('datosJSONString').innerHTML = objString;
document.getElementById('datosJSON').innerHTML = obj;
console.log(obj);
