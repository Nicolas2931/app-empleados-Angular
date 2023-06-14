import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent implements OnInit {
  volverHome(){
    this.router.navigate(['']);
}
titulo = 'Listado de Empleados';
cuadroNombre:string="";
cuadroApellido:string="";
cuadroCargo:string="";
cuadroSalario:number=0;
empleados:Empleado[]=[];
indice:number;
constructor(private router: Router,private route:ActivatedRoute,private miServicio:ServicioEmpleadosService, private Servicio_Empleados:EmpleadosService){
  this.empleados=this.Servicio_Empleados.empleados;
  
}
ngOnInit(): void {
  this.indice=this.route.snapshot.params['id'];
  let empleado:Empleado=this.Servicio_Empleados.encontrarEmpleado(this.indice);
  this.cuadroNombre=empleado.nombre;
  this.cuadroApellido=empleado.apellido;
  this.cuadroCargo=empleado.cargo;
  this.cuadroSalario=empleado.salario;
}

actualizaEmpleado(){
  //Para agregar el objeto al arreglo se usa push.
  //Let se usa para declarar variables dentro de un método
  let miEmpleado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
  //this.miServicio.muestraMensaje("Nombre del empleado:"+miEmpleado.nombre+"\nCargo:" +miEmpleado.cargo);
  this.Servicio_Empleados.actualizarEmpleado(this.indice,miEmpleado);
  this.router.navigate(['']);
}

}
