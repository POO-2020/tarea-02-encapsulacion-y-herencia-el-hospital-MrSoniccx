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
        this.testDoct = new Doctor(this.testGarcia,"Oftalmologia","312-457-3641","105413587")
        this.paciente = new Paciente(this.testPepe,new Fecha(new Date(2002,5,20)),"312-526-2456")
        this.testTiempo = new Tiempo(7,53,"pm")
        this.testCitaa = new Cita (new Fecha(new Date(2002,5,20)),this.testTiempo,this.testDoct,this.paciente)
        this.testHosp = new Hospital("Hospital Chido", "Calle manzanas, Num #674")
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