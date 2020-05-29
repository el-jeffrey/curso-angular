import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-total-estudiantes',
  templateUrl: './total-estudiantes.component.html',
  styleUrls: ['./total-estudiantes.component.css']
})
export class TotalEstudiantesComponent implements OnInit {
  total: number = 0;
  private subRoute: any;
  constructor(private _route: ActivatedRoute) {
    this.subRoute = this._route.params.subscribe(par => {
      this.total = +par['valor']
    })

    console.log(this._route.snapshot.params.valor,'---------')

  }

  ngOnInit() {
  }

}
