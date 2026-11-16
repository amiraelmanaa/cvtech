import { Component, inject } from '@angular/core';
import { EmbaucheService } from '../../services/embauche.service';

/** Affiche la liste des personnes embauchées (lue depuis EmbaucheService). */
@Component({
  selector: 'app-embauche-list',
  template: `
    <h5 class="mt-4">Personnes embauchées ({{ embaucheService.embauches().length }})</h5>
    <!-- embauches() : on LIT un signal en l'appelant comme une fonction -->
    <ul class="list-group">
      @for (cv of embaucheService.embauches(); track cv.id) {
        <li class="list-group-item">{{ cv.firstname }} {{ cv.name }} — {{ cv.job }}</li>
      } @empty {
        <li class="list-group-item text-muted">Personne n'a encore été embauché.</li>
      }
    </ul>
  `,
})
export class EmbaucheListComponent {
  embaucheService = inject(EmbaucheService); // public : utilisé dans le template
}
