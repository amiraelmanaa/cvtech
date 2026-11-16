import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

/**
 * TodoService : logique métier des todos (logger, ajouter, lister, supprimer).
 *
 * ⚠ Volontairement SANS "providedIn: 'root'" : le service est déclaré dans
 * "providers" du TodoComponent. Chaque <app-todo> obtient donc sa PROPRE
 * instance. C'est ce qui permet au WeekTodo d'avoir une liste par jour
 * (avec un singleton, les 5 jours partageraient la même liste).
 */
@Injectable()
export class TodoService {
  private todos: Todo[] = [];

  /** Affiche les todos dans la console. */
  logTodos(): void {
    console.log('Liste des todos :', this.todos);
  }

  /** Ajoute un todo puis le logge. */
  addTodo(todo: Todo): void {
    this.todos.push(todo);
    this.logTodos();
  }

  /** Retourne la liste (même référence : elle reste à jour dans la vue). */
  getTodos(): Todo[] {
    return this.todos;
  }

  /** Supprime un todo. splice modifie le tableau en place. */
  deleteTodo(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
    this.logTodos();
  }
}
