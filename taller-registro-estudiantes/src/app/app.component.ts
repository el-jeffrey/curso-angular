import { Component, OnInit } from '@angular/core';
import { Estudiante } from './cls-estudiante';
import { DatosService } from './datos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  familias:any[]=[];
  constructor(private api: DatosService) {
    this.onCargarFamilias();
  }

  onCargarFamilias = () => {
    //llamar la función de un service
    this.api.get_familias_productos().subscribe(
      data => {
        console.log(data, 'familia')
        this.familias = data as any[];
      },
      error => {
        console.log(error,'error')
      }
    )
  }

}
