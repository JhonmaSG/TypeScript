/*
Es una caracteristica que se agrego a ES6

Nos permite agregar funcionalidad sin modificar a la clases, 
metodos, atributos o propieades de la clase a la cual queremos mejorar.

Se usa el simbolo: @
*/
function Saludar(target: Function): void{
    target.prototype.saludos = function():void{
        console.log("Hola desde decoradores");
    }
}

@Saludar
class Hola{
    constructor(){}
}

let hola1 = new Hola();

hola1.saludos();
/*
Error aceptado
Property 'saludos' does not exist on type 'Hola'.
22 hola1.saludos();
*/