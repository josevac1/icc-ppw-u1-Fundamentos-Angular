import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-perfil-page',
  imports: [],
  templateUrl: './perfilPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerfilPage { 
  name = signal('Juan');
  lastName = signal('Pérez');
  age = signal(30);

 getFullName() {
  return `${this.name()} ${this.lastName()} con edad ${this.age()} años`;
}



  changeData() {
    this.name.set('pepito');
    this.lastName.set('Gonzales');
    this.age.set(25);
  }


  changeAge() {
    this.age.set(18);
  }

  resetData() {
    this.name.set('Juan');
    this.lastName.set('Pérez');
    this.age.set(30);
  }
  
}
