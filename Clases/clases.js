"use strict";
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    getNombre() {
        return this.nombre;
    }
    static metodoStatico() {
        return 10;
    }
}
let persona1 = new Persona('Juan');
console.log(persona1.getNombre());
console.log(Persona.metodoStatico());
