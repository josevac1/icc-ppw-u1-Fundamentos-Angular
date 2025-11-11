import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProyectosServices {

 //proyectos= signal<Proyecto[]>([

   // {
      //id:1, nombre: 'Proyecto A',
      //descripcion: 'Descripcion del Proyecto A'
    //},
    //{
      //id:2, nombre: 'Proyecto B',
      //descripcion: 'Descripcion del Proyecto B'
    //}
  //])
  //addProyecto (proyecto: Proyecto){
    //this.proyectos.set([...this.proyectos(), proyecto]);
  //}
  constructor() { 
    effect (()=>{
      const data=this.Proyectos();
      console.log(data);
      console.log(JSON.stringify(data))
      localStorage.setItem(this.STORAGE_KEY,JSON.stringify(data));
    });
  }
 
   private readonly STORAGE_KEY= 'proyectosApp';

   Proyectos = signal<Proyecto[]>(this.loadProyectos())
   
  private loadProyectos():Proyecto[] {
    const data =localStorage.getItem(this.STORAGE_KEY)

    return data ? JSON.parse(data): [{
      id:1, nombre: 'Proyecto A',
      descripcion: 'Descripcion del Proyecto A'
    }];
  }

 deleteProyecto(){
  this.Proyectos.set([...this.Proyectos().slice(1)])
  } 


  addProyecto (proyecto: Proyecto){
    this.Proyectos.set([...this.Proyectos(), proyecto]);
  }
}
