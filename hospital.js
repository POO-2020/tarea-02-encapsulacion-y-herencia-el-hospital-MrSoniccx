export default class Hospital{

    constructor({nombre, direccion})
    {
        this._nombre = nombre
        this._direccion = direccion
        this._doctores = new Array()
        this._citas = new Array()
    }

    registrarDoctor(doctor)
    {
        this._doctores.push(doctor)
    }
    listarDoctores()
    {
        console.log("~ D O C T O R E S ~")
        this._doctores.forEach( (doct, i) => {
            console.log(`(${i+1}) ${doct.getPerfil()}`)
        })
    }
    registrarCita(cita)
    {
        this._citas.push(cita)
    }
    listarCitas()
    {
        console.log("~ C I T A S ~")
        this._citas.forEach( (cita, i) => {
            console.log(`(${i+1}) ${cita.getCita()}`)
        })
    }
}