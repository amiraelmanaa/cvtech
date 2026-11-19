import { Component } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';


@Component({
  selector: 'app-week-todo',
  imports: [TodoComponent],
  templateUrl: 'week-todo.component.html',
})
export class WeekTodoComponent {
  days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'];
}
