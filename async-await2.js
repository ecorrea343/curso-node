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


let getEmpleado = async(id) => {



    let empleadoDB = empleados.find(empleados => empleados.id === id)

    if (!empleadoDB) {
        throw new Error(`No existe un empleado con el ID ${ id }`)
    } else {
        return (empleadoDB)
    }



}

let getSalario = async(empleados) => {



    let salarioBD = salarios.find(salarios => salarios.id === empleados.id)

    if (!salarioBD) {
        throw new Error(`No Existe un empleado con el ID : ${ empleados.nombre }`)
    } else {
        return {
            nombre: empleados.nombre,
            salario: salarioBD.salario,
            id: empleados.id
        }
    }


}



let getInformacion = async(id) => {

    let empleado = await getEmpleado(id)
    let resp = await getSalario(empleado)

    return `${ resp.nombre } tiene un salario de \$ ${ resp.salario } `
}

getInformacion(1)
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error))