import {EventEmitter} from '@angular/core';
import { Output } from '@angular/core';
import { Component} from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado',
  templateUrl: './caracteristicas-empleado.component.html',
  styleUrls: ['./caracteristicas-empleado.component.css']
})
export class CaracteristicasEmpleadoComponent {
    @Output() caracteristicasEmpleados= new EventEmitter<string>();
    constructor(private miServicio:ServicioEmpleadosService){}
    agregarCaracteristicas(value:string){
      this.miServicio.muestraMensaje("La característica insertada es: "+value);
      this.caracteristicasEmpleados.emit(value);
    }
    
}
