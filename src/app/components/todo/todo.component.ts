import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';

/**
 * Exercice 7 : composant Todo (formulaire + liste).
 * "providers: [TodoService]" => une instance du service PAR composant.
 * Dans WeekTodo, chaque jour a donc sa propre liste.
 */
@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  providers: [TodoService],
  template: `
    <h5>{{ title }}</h5>
    <label class="form-label mb-0">Name :</label>
    <input type="text" class="form-control mb-2" [(ngModel)]="name" />
    <label class="form-label mb-0">Content :</label>
    <input type="text" class="form-control mb-2" [(ngModel)]="content" />
    <button class="btn btn-primary btn-sm" (click)="addTodo()">Add Todo</button>

    <ul class="list-group mt-3">
      @for (todo of todos; track $index) {
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div>
            <strong>{{ todo.name }}</strong><br />
            <small>{{ todo.content }}</small>
          </div>
          <button class="btn btn-outline-danger btn-sm" (click)="deleteTodo(todo)">✕</button>
        </li>
      }
    </ul>
  `,
})
export class TodoComponent {
  @Input() title = 'Todo'; // titre personnalisable (utile pour WeekTodo)

  private todoService = inject(TodoService);
  todos: Todo[] = this.todoService.getTodos();

  name = '';
  content = '';

  addTodo(): void {
    if (!this.name.trim()) return; // on ignore un nom vide
    this.todoService.addTodo(new Todo(this.name, this.content));
    this.name = '';
    this.content = '';
  }

  deleteTodo(todo: Todo): void {
    this.todoService.deleteTodo(todo);
  }
}
