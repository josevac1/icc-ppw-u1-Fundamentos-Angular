import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';

@Component({
  selector: 'app-add-proyecto',
  imports: [],
  templateUrl: './add-proyecto.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProyecto { 

   name=signal ('')
  descripcion= signal('')

  proyectos= signal<Proyecto[]>([{
    id:1, nombre:'Proyecto A',
    descripcion: 'descipcion'
  }]);

  newProyecto =output <Proyecto>();
  removeProyecto=output<number>();
  
   changeName (value: string ){
    this.name.set(value)
  }

  changeDescripcion(value: string){
    this.descripcion.set(value);

  }

  dellProyecto(id: number){
    this.removeProyecto.emit(id);
  }
  addProyecto(){
    const newProyecto: Proyecto ={
      id: Math.floor(Math.random() *1000),
      nombre: this.name(),
      descripcion: this.descripcion()

    };
    this.newProyecto.emit(newProyecto);
    this.name.set('');
    this.descripcion.set('');
    
  }

}
