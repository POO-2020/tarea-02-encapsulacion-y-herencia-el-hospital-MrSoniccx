export default class Doctor{

    constructor(nombre, especialidad, telefono, cedula)
    {
        this.nombre=nombre
        this.especialidad=especialidad
        this.telefono=telefono
        this.cedula=cedula
    }

    getPerfil()
    {
        return (`${this.cedula}, ${this.especialidad}, ${this.nombre.getNombreCompleto()}, ${this.telefono}`)
    }
}