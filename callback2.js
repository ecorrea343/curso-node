let empleados = [{
    id: 1,
    nombre: 'Emmanuel'
}, {
    id: 2,
    nombre: 'Max'

}, {
    id: 3,
    nombre: 'Francisco'
}]


let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}]


let getEmpleado = (id, callback) => {

    let empleadoDB = empleados.find(empleados => empleados.id === id)

    if (!empleadoDB) {
        callback(`No existe un empleado con el ID ${ id }`)
    } else {
        callback(null, empleadoDB)
    }

}

let getSalario = (empleados, callback) => {

    let salarioDB = salarios.find(salario => salario.id === empleados.id)

    if (!salarioDB) {

        callback(`No existe salario con el ID ${ empleados.nombre }`)
    } else {
        callback(null, { nombre: empleados.nombre, salario: salarioDB.salario, id: empleados.id })
    }
}

getEmpleado(3, (error, empleado) => {

    if (error) {

        return console.log(error);

    }

    getSalario(empleado, (error, resp) => {

        if (error) {

            return console.log(error);
        }

        console.log(`El salario de ${ resp.nombre } es de \$${ resp.salario }`);

    })
})