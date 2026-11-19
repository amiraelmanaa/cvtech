import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';


@Injectable()
export class TodoService {
  private todos: Todo[] = [];

  /** Affiche les todos dans la console */
  logTodos(): void {
    console.log('Liste des todos :', this.todos);
  }

  /** Ajoute un todo puis le logge */
  addTodo(todo: Todo): void {
    this.todos.push(todo);
    this.logTodos();
  }

  /** Retourne la liste  */
  getTodos(): Todo[] {
    return this.todos;
  }

  /** Supprime un todo */
  deleteTodo(todo: Todo): void {
    // Recherche l'index du todo dans le tableau
    const index = this.todos.indexOf(todo);

    //si l'élément n'existe pas dans le tableau (indexOf retourne -1)
    if (index > -1) {
      this.todos.splice(index, 1); //splice() modifie directement le tableau
    }
    this.logTodos();
  }
}
