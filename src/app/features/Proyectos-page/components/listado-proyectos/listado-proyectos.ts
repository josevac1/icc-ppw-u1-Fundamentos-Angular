import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ProyectosPage } from '../../Proyectos-page';

@Component({
  selector: 'app-listado-proyectos',
  imports: [],
  templateUrl: './listado-proyectos.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListadoProyectos { 
  listName= input.required<string>();
  proyectos= input.required<Proyecto[]>();
  
}
