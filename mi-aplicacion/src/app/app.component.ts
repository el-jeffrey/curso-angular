import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Javier';
  obj:Figura;
  tipo:string = 'T';
  var_a: number;
  var_b: number;
  var_c: number = 0;
  suma = (a: number, b: number) => {
    this.var_c = a + b;
  };

  _fecha=new Date();
  formato="fullDate"
}

export class Figura{
  color:string='';
}