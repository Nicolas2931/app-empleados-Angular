import { Component } from '@angular/core';
import {Empleado} from './empleado.model'
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Empleados';
  
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
  empleados:Empleado[]=[];
  //Se inyecta el servicio
  constructor(private miServicio:ServicioEmpleadosService, private Servicio_Empleados:EmpleadosService){
    this.empleados=this.Servicio_Empleados.empleados;
  }
  agregarEmpleado(){
    //Para agregar el objeto al arreglo se usa push.
    //Let se usa para declarar variables dentro de un método
    let miEmpleado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    //this.miServicio.muestraMensaje("Nombre del empleado:"+miEmpleado.nombre+"\nCargo:" +miEmpleado.cargo);
    this.Servicio_Empleados.agregarEmpleadoServicio(miEmpleado);
  }

}
