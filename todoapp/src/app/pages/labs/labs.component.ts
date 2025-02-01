import { Component, ViewEncapsulation, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  title = 'todoapp';
  tasks = signal([
    'Instalar angular CLI',
    'Crear projecto',
    'Crear componentes'
  ]);

  name = signal('Nombre pedro');
  edad = 86;

  person = {
    name:'Emmanuel',
    edad: 24
  }

  clikHandler(){
    alert("Hola putita")
  }

  changeHandler(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
  }

  keyDownHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    alert(input.value);
  }
}
