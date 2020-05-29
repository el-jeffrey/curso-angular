import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';
import { ComentarioCovid } from '../cls-comentario-covid';

@Component({
  selector: 'app-lista-comentarios-covid',
  templateUrl: './lista-comentarios-covid.component.html',
  styleUrls: ['./lista-comentarios-covid.component.css']
})
export class ListaComentariosCovidComponent implements OnInit {

  comentarios: any[] = [];
  txt_comentario: string = '';
  constructor(private api: DatosService) {
    this.onRefresh();
  }

  ngOnInit() {
  }

  onRefresh = () => {
    this.api.obtener_comentarios_covid().subscribe(
      data => {
        this.comentarios = data as any[];
      },
      error => {
        console.log(error, 'error')
      })
  }

  onSaveComentarioCovid = (c: ComentarioCovid = null) => {
    const parametroSave: ComentarioCovid = 
                              (c == null) 
                                  ? new ComentarioCovid(this.txt_comentario, 'El Jeffrey') 
                                  : new ComentarioCovid(c.comentario,c.usuario, c.id, 'R');
    this.api.guardar_comentario_covid(parametroSave).subscribe(
      data => {
        console.log(data, 'resultado guardado')
        this.txt_comentario = '';
        alert((data as any).mensaje1);
        this.onRefresh();
      },
      error => {
        alert(error.message)
        console.log(error, 'error')
      }
    )
  }

}
