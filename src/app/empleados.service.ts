import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Injectable()
export class EmpleadosService {

  constructor(private servicioVentanaEmergente:ServicioEmpleadosService) { 

  }

  empleados:Empleado[] =[
    new Empleado("Nicolas","Rubio","Desarrollador",2400000),
    new Empleado("Pedro","Perez","Administrador",25000000),
    new Empleado("Laura","Rodriguez","Psicologo",2300000)
  ];

  agregarEmpleadoServicio(miEmpleado:Empleado){
    this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar:"+"\n"+miEmpleado.nombre+"\nSalario: "+miEmpleado.salario+" $")
    this.empleados.push(miEmpleado);
  }
}
