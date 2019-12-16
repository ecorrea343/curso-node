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


let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

        let empleadoDB = empleados.find(empleados => empleados.id === id)

        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${ id }`)
        } else {
            resolve(empleadoDB)
        }

    })

}

let getSalario = (empleados) => {

    return new Promise((resolve, reject) => {

        let salarioBD = salarios.find(salarios => salarios.id === empleados.nombre)

        if (!salarioBD) {
            reject(`No Existe un empleado con el ID : ${ empleados.nombre }`)
        } else {
            resolve({
                nombre: empleados.nombre,
                salario: salarioBD.salario,
                id: empleados.id
            })
        }

    })
}


getEmpleado(2).then(empleados => {

        return getSalario(empleados)

    })
    .then(reso => {
        console.log(`EL SALARIO ${ resp.nombre } es de ${ reso.salario } `);
    })
    .catch(error => {
        console.log(error);
    })