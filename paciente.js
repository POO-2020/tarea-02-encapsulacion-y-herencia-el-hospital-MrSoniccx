export default class Paciente{
    constructor(nombre, fechaNacimiento, telefono)
    {
        this.nombre = nombre
        this.fechaNacimiento = fechaNacimiento
        this.telefono = telefono
    }

    getPerfil(){
        return (`${this.nombre.getNombreCompleto()}, ${this.fechaNacimiento.getFecha()}, ${this.telefono}`)
    }
}