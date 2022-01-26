let personaMap = new WeakMap();

class Persona{
    constructor(nombre, edad){
        personaMap.set(this, {
            _nombre: nombre,
            _edad: edad,
            _dni: ""
        })
    }
    set estableceDni(valor){
        personaMap.get(this)._dni = valor;
    }

    get _dni(){
        return personaMap.get(this)._dni;
    }
    saludar(){
       console.log("Hola soy "+ this._nombre + " tengo "+ this.edad+ " años y mi identidad es " + this._dni);

    }
}
let objPersona = new Persona("Juank Galindo", 20)
objPersona.estableceDni = "123456";
objPersona._dni = "sadfsadf";
objPersona.saludar();
console.log(objPersona._dni)