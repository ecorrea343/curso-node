let nombre = 'Deadpoll'
let real = 'Wade Winston'

let nombreCompleto = nombre + ' ' + real
let nombreTemplate = `${ nombre } ${ real }`

console.log(nombreCompleto === nombreTemplate);

function getNombre() {

    return `${nombre} ${real}`

}
console.log(`El nombre de ${ getNombre() }`);