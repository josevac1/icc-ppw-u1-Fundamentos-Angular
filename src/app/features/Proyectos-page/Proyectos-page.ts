import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ListadoProyectos } from './components/listado-proyectos/listado-proyectos';

@Component({
  selector: 'app-proyectos-page',
  imports: [ListadoProyectos],
  templateUrl: './Proyectos-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProyectosPage {
  ChangeName(value: string) {
    this.name.set(value);

  } 
  ChangeDescription(value: string) {
    this.descripcion.set(value);
  } 
  addProyecto() {
    const newProyecto: Proyecto = {
      id: this.proyectos().length + 1,
      nombre: this.name(),
      descripcion: this.descripcion()
    };
    this.proyectos.set([...this.proyectos(), newProyecto]);
    this.name.set('');
    this.descripcion.set('');
  
  }
  name = signal('');
  descripcion =signal('');

  proyectos= signal<Proyecto[]>([

    {
      id:1, nombre: 'Proyecto A',
      descripcion: 'Descripcion del Proyecto A'
    },
    {
      id:2, nombre: 'Proyecto B',
      descripcion: 'Descripcion del Proyecto B'
    }
  ])
 
 
  
}
