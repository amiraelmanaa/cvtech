import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ToastComponent } from './components/toast/toast.component';

/** Composant racine : barre de navigation + zone de contenu + footer + toasts. */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ToastComponent],
  templateUrl: './app.html',
})
export class App {
  // Liste des liens du menu (évite de répéter 8 fois la même balise <a>)
  links = [
    { path: '/', label: 'Home' },
    { path: '/cv', label: 'Cv' },
    { path: '/todo', label: 'Todo' },
    { path: '/week-todo', label: 'Week Todo' },
    { path: '/mini-word', label: 'Mini Word' },
    { path: '/color', label: 'Color' },
    { path: '/ttc', label: 'TTC' },
    { path: '/rainbow', label: 'Rainbow' },
  ];
}
