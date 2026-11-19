import { Component, inject } from '@angular/core';
import { EmbaucheService } from '../../services/embauche.service';

/** Affiche la liste des personnes embauchées (lue depuis EmbaucheService). */
@Component({
  selector: 'app-embauche-list',
  templateUrl: 'embauche-list.component.html',
})
export class EmbaucheListComponent {
  embaucheService = inject(EmbaucheService); // public : utilisé dans le template
}
