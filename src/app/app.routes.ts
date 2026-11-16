import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CvPageComponent } from './components/cv-page/cv-page.component';
import { TodoComponent } from './components/todo/todo.component';
import { WeekTodoComponent } from './components/week-todo/week-todo.component';
import { MiniWordComponent } from './components/mini-word/mini-word.component';
import { ColorComponent } from './components/color/color.component';
import { TtcComponent } from './components/ttc/ttc.component';
import { RainbowComponent } from './components/rainbow/rainbow.component';

/** Table de routage : une URL => un composant affiché dans <router-outlet>. */
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cv', component: CvPageComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'week-todo', component: WeekTodoComponent },
  { path: 'mini-word', component: MiniWordComponent },
  { path: 'color', component: ColorComponent },
  { path: 'ttc', component: TtcComponent },
  { path: 'rainbow', component: RainbowComponent },
  { path: '**', redirectTo: '' }, // URL inconnue => retour à l'accueil
];
