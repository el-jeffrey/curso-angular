import { Component } from '@angular/core';
import { Estudiante } from './cls-estudiante';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  estudiantes: Estudiante[] = [];
  estudiante_selected: Estudiante = new Estudiante();
  posicion = -1;

  save = () => {
    const guardar_promesa = new Promise((resuelto, fallo) => {
      if (this.posicion >= 0) {
        this.estudiantes[this.posicion] = this.estudiante_selected;
      } else {
        this.estudiantes.push(this.estudiante_selected);
      }
      resuelto('ok')
    })

    guardar_promesa.then(x => {
      this.estudiante_selected = new Estudiante();
      this.posicion = -1;
    })
  }

  onNew = () => {
    this.estudiante_selected = new Estudiante();
    this.posicion = -1;
  }

  onEdit = (obj, pos) => {
    this.estudiante_selected = { ...obj };
    this.posicion = pos;
  }

}
