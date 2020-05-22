import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({providedIn: 'root'})
export class DatosService {

  data_estudiantes = [];

  constructor(private http: HttpClient) { }

  //realizar el request
  callGet = (api: string) => this.http.get(api)

  /*
  *Funciones para retornar a los componentes la data
  */
  get_familias_productos =()=> 
          this.callGet(`http://www.tasklever.com/desktopmodules/TL_ServidorDeApis/api/call/ObtenerGruposProductos?id=0&idest=`);
  get_familias_productos2 =(par)=> 
          this.callGet(`https://api.covid19api.com/country/${par}/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z`);

}
//ng g s nombre_del_Servicio