import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  estudiante: string = 'Byron'
  mostrar = true;

  estudiantes: Estudiante[] = [
    { nombre: 'Byron', edad: 24, anio: 1996, cumpleanio: new Date(1996, 2, 18) },
    new Estudiante('Carlos', 26, 1994, new Date(1994, 3, 27)),
    { nombre: 'Jeffrey', edad: 27, anio: 1992, cumpleanio: new Date(1992, 9, 27) },
    new Estudiante('Alana', 1, 2018, new Date(2018, 9, 3))
  ];

  formatoFecha: boolean = false;

 get formato () {
      return this.formatoFecha ? 'shortDate' : 'fullDate'
  }


  otraFuncion=(nombre)=>{
    alert('Hola ' + nombre + ', yo soy groot.')
  }

}

class Estudiante {
  constructor(public nombre: string, public edad: number, public anio: number, public cumpleanio: Date) { }
}
