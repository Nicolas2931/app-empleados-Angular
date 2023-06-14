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

  encontrarEmpleado(indice:number){
    let empleado:Empleado=this.empleados[indice];
    return empleado;
  }
  actualizarEmpleado(indice:number,empleado:Empleado){
    let empleadoModificado=this.empleados[indice];
    //empleado es el objeto que esta recibiendo por parametro
    empleadoModificado.nombre=empleado.nombre;
    empleadoModificado.apellido=empleado.apellido;
    empleadoModificado.cargo=empleado.cargo;
    empleadoModificado.salario=empleado.salario;
  }
}
