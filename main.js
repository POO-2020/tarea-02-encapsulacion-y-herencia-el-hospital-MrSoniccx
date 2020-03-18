import Nombre from "./nombre.js"
import Doctor from "./doctor.js"
import Paciente from "./paciente.js"
import Fecha from "./fecha.js"
import Cita from "./cita.js"
import Tiempo from "./tiempo.js"
import Hospital from "./hospital.js"

class Main{//${this.}

    constructor(){
        this.testPepe = new Nombre("Pepe","Hernandez","Rodrigo")
        this.testGarcia = new Nombre("Garcia", "Correas", "Flores")
        this.testTiempo = new Tiempo(7,53,"pm")
        this.testHosp = new Hospital("Hospital Chido", "Calle manzanas, Num #674")

        let datosPaciente = {
            nombre: this.testPepe,
            fechaNacimiento: new Fecha(new Date(2002,5,20)),
            telefono: "312-526-2456"
        }
        let datosDoct = {
            nombre: this.testGarcia,
            especialidad: "Oftalmologia",
            telefono: "312-457-3641",
            cedula: "105413587"
        }

        this.paciente = new Paciente(datosPaciente)
        this.testDoct = new Doctor(datosDoct)

        let datosCita = {
            fecha: new Fecha(new Date(2002,5,20)),
            hora: this.testTiempo,
            doctor: this.testDoct,
            paciente: this.paciente
        }

        this.testCitaa = new Cita(datosCita)
    }

    testNombre(){
        
        console.log(this.testPepe.getNombreCompleto())
        console.log(this.testPepe.getApellidoNombre())
        console.log(this.testPepe.getIniciales())

    }

    testDoc(){
        console.log(this.testDoct.getPerfil())
    }

    testPac(){
        console.log(this.paciente.getPerfil())
    }
    testCita(){
        console.log(this.testCitaa.getCita())
    }

    testHospital(){
        this.testHosp.registrarDoctor(this.testDoct)
        this.testHosp.registrarCita(this.testCitaa)

        this.testHosp.listarDoctores()
        this.testHosp.listarCitas()
        
    }
}

let test = new Main();
test.testNombre();
test.testDoc();
test.testPac();
test.testCita();
test.testHospital();