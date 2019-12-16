// function sumar(a, b) {
//     return a + b
// }


//Aca estamos ocupando la funcion de Flecha 
///Si la linea de return se puede ejectur en una sola linea entonces pasamos al metodo 2 .

//Motodo 1 de  la  Funcion de flecha.
// let sumar = (a,b) =>{
//     return a+b;
// }

///Metodo 2 si lo que queremos retornar se puede ejecutar en una sola linea.

// let sumar = (a, b) => a + b

// console.log(sumar(10, 20));


///Ejecricio de convertir esta funcion a , funcion de flecha para simplificar el codigo.
// function saludar() {
//     return 'Hola Mundo'
// }
///Form asimplificada de la funcion saludar
let saludar = () => 'Hola Mundo'

console.log(saludar());

let deadpool = {

    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',

    ///Asi simplificamos en condigo cuando ocupamos "THIS" , esta propiedad aputa al valor fuera de la funcion.
    getNombre() {
        return `${this.nombre} ${this.apellido} - poder : ${this.poder}`
    }
    ///Asi podrias simplificar si no ocuparamso el"This""
    //getNombre: () => `${this.nombre} ${this.apellido} - poder : ${this.poder}`
};

console.log(deadpool.getNombre());