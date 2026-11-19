import { Component } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';


@Component({
  selector: 'app-week-todo',
  imports: [TodoComponent],
  template: `
    <h3>Week Todo</h3>
    <div class="row">
      @for (day of days; track day) {
        <div class="col-md"><app-todo [title]="day" /></div>
      }
    </div>
  `,
})
export class WeekTodoComponent {
  days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'];
}
