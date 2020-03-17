export default class Hospital{

    constructor(nombre, direccion)
    {
        this.nombre = nombre
        this.direccion = direccion
        this.doctores = new Array()
        this.citas = new Array()
    }

    registrarDoctor(doctor)
    {
        this.doctores.push(doctor)
    }
    listarDoctores()
    {
        console.log("~ D O C T O R E S ~")
        this.doctores.forEach( (doct, i) => {
            console.log(`(${i+1}) ${doct.getPerfil()}`)
        })
    }
    registrarCita(cita)
    {
        this.citas.push(cita)
    }
    listarCitas()
    {
        console.log("~ C I T A S ~")
        this.citas.forEach( (cita, i) => {
            console.log(`(${i+1}) ${cita.getCita()}`)
        })
    }
}