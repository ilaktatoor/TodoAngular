import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task } from '../../models/task.model';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  tasks = signal<Task[]>([
    {
      id: Date.now(),
      title: 'Crear test',
      compleated: false
    },
    {
      id: Date.now(),
      title: 'Crear componentes',
      compleated: false
    },
  ]);

  changeHandler(event: Event){
    const inputVal = event.target as HTMLInputElement;
    const newTask = inputVal.value;
    this.addTask(newTask);
    inputVal.value = '';
  }

  addTask(title: String){
    const newTask = {
      id: Date.now(),
      title: title,
      compleated: false
    }
    this.tasks.update((tasks) => [...tasks, newTask]);
  }

  deleteTask(index: number){
    this.tasks.update((tasks)=> tasks.filter((task, position)=> position !== index))
  }  

  updateTask(index: number){
    this.tasks.update((tasks)=>{
      return tasks.map ((task, position)=>{
        if (position === index){
          return {
            ...task,
            compleated: !task.compleated
          }
        }
        return task;
      })
    })

  }
}
