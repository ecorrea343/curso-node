let deadpool = {

    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',

    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder : ${this.poder}`

    }
};
///en la linea 13 cambiamso el nombre de la variable nombre a otra identificacion por eso las ":" .
let { nombre: primerNombre, apellido, poder } = deadpool;

console.log(primerNombre, apellido, poder);