import { Injectable, signal } from '@angular/core';
import { ProyectoDospage } from './Proyecto-dospage';

@Injectable({
  providedIn: 'root'
})
export class ProyectosServices {

  constructor() { }
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
  addProyecto (proyecto: Proyecto){
    this.proyectos.set([...this.proyectos(), proyecto]);
  }
}
