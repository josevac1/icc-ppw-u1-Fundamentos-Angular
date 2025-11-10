import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProyectosServices } from './proyectos-services';
import { ListadoProyectos } from "../Proyectos-page/components/listado-proyectos/listado-proyectos";
import { AddProyecto } from '../Proyectos-page/components/add-proyecto/add-proyecto';

@Component({
  selector: 'app-proyecto-dospage',
  imports: [ListadoProyectos, AddProyecto],
  templateUrl: './Proyecto-dospage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProyectoDospage { 


  ProyectosServices = inject(ProyectosServices);
}
