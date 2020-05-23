import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { RouterModule, Routes } from '@angular/router';
import { TotalEstudiantesComponent } from './total-estudiantes/total-estudiantes.component'
import { DatosService } from './datos.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ListaComentariosCovidComponent } from './lista-comentarios-covid/lista-comentarios-covid.component';


const appRoutes: Routes = [
  {
    path: 'estudiantes-view', component: EstudiantesComponent
  }, 
  { 
    path: 'quienes-somos', component: QuienesSomosComponent 
  },
  { 
    path: 'total/:valor', component: TotalEstudiantesComponent 
  }, 
  { 
    path: '**', component: QuienesSomosComponent 
  }
];

@NgModule({
  declarations: [
    AppComponent,
    QuienesSomosComponent,
    EstudiantesComponent,
    TotalEstudiantesComponent,
    ListaComentariosCovidComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
