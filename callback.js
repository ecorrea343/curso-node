// setTimeout(
//     () => {
//         console.log('Hola Mundo');
//     }, 3000
// );

let getUsuarioById = (id, callback) => {

    let usuario = {
        nombre: 'Emmanuel',
        id
    }
    if (id === 20) {
        callback(`El usuario con id ${ id },no existe en la base de datos`)
    }
    callback(null, usuario)
}

getUsuarioById(1, (error, usuario) => {

    if (error) {
        return console.log(error);
    }
    console.log('Usuario Base de Datos', usuario);

})