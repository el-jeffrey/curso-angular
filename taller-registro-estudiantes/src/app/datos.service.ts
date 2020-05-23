import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Endpoints } from './endpoints';
import { ComentarioCovid } from './cls-comentario-covid';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }

@Injectable({ providedIn: 'root' })
export class DatosService {

  data_estudiantes = [];

  constructor(private http: HttpClient) { }

  //realizar el request
  private callGet = (api: string) => this.http.get(api)
  private callPost = (api: string, parametros: any = '') => this.http.post(api, parametros, httpOptions)

  /*
  *Funciones para retornar a los componentes la data
  */
  get_familias_productos = () =>
    this.callGet(`${Endpoints.DOMINIO}call/ObtenerGruposProductos?id=0&idest=`);

  /**
   * Comentarios Cv
   */
  obtener_comentarios_covid = (id: number = 0, estado: string = '') =>
    this.callGet(`${Endpoints.DOMINIO}covid/ObtenerComentarioCv?id=${id}&est=${estado}`);
  guardar_comentario_covid = (par: ComentarioCovid) =>
    this.callPost(`${Endpoints.DOMINIO}covid/GuardarComentarioCv`, par);


  private api_covid = (par) =>
    this.callGet(`https://api.covid19api.com/country/${par}/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z`);

}
//ng g s nombre_del_Servicio
/*

http://www.tasklever.com/desktopmodules/TL_ServidorDeApis/api/covid/ObtenerComentarioCv?id=0&est
http://www.tasklever.com/desktopmodules/TL_ServidorDeApis/api/covid/GuardarComentarioCv
[HttpPost]
GuardarComentarioCv
-------Payload--------
long   id
string comentario
string estado
string usuario
*/
