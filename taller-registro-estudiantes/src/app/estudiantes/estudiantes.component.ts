import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudiante } from '../cls-estudiante';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

  estudiantes: Estudiante[] = [];
  estudiante_selected: Estudiante = new Estudiante();
  posicion = -1;
  
  constructor(
    private _router: Router
  ) {
    console.log('constructor')
   }

  ngOnInit() {
    console.log('onInit')
  }

  verTotal=(p_total:number)=>{
    this._router.navigate(['/total',p_total]);
  }

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
