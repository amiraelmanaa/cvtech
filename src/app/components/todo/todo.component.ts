import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';


@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  providers: [TodoService],
  templateUrl: 'todo.component.html',
})
export class TodoComponent {
  @Input() title = 'Todo'; // titre personnalisable (utile pour WeekTodo)

  private todoService = inject(TodoService);
  todos: Todo[] = this.todoService.getTodos();

  //Lorsque l'utilisateur écrit dans les champs, les propriétés sont automatiquement mises à jour
  name = '';
  content = '';

  addTodo(): void {
    if (!this.name.trim()) return; // on ignore un nom vide trim() supprime les espaces au début et à la fin d'une chaîne
    this.todoService.addTodo(new Todo(this.name, this.content));
    
    // on vide les champs pour le prochain todo
    this.name = '';
    this.content = '';
  }

  deleteTodo(todo: Todo): void {
    this.todoService.deleteTodo(todo);
  }
}
