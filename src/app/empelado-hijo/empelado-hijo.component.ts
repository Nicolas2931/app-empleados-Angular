import { Component, Input } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empelado-hijo',
  templateUrl: './empelado-hijo.component.html',
  styleUrls: ['./empelado-hijo.component.css']
})
export class EmpeladoHijoComponent {
    @Input() empleadoDeLista:Empleado;
    @Input() indice:number;
    arrayCaracteristicas=[''];
    agregarCaracteristica(nuevaCaracteristica:string){
      this.arrayCaracteristicas.push(nuevaCaracteristica);
    }
}
