import { Component } from '@angular/core';
import {Empleado} from './empleado.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Empleados';
  empleados:Empleado[] =[
    new Empleado("Nicolas","Rubio","Desarrollador",2400000),
    new Empleado("Pedro","Perez","Administrador",25000000),
    new Empleado("Laura","Rodriguez","Psicologo",2300000)
  ];
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  agregarEmpleado(){
    //Para agregar el objeto al arreglo se usa push.
    let miEmpleado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    this.empleados.push(miEmpleado);
  }

}
