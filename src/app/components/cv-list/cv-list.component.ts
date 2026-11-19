import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cv } from '../../models/cv';

/**
 * Liste des CVs (composant « présentationnel » / bête).
 * Il ne connaît NI les services NI le détail : il reçoit les données par
 * @Input et PRÉVIENT son parent par @Output quand on clique sur un CV.
 *
 */
@Component({
  selector: 'app-cv-list',
  template: `
    <ul class="list-group">
      <!-- track cv.id : aide Angular à ne recréer que les éléments modifiés.
           let odd = $odd ; let even = $even : booléens fournis par @for -->
      @for (cv of cvs; track cv.id; let odd = $odd; let even = $even) {
        <li
          class="list-group-item d-flex align-items-center gap-3 cv-item"
          [class.row-even]="even"
          [class.row-odd]="odd"
          [class.selected]="cv === selected"
          (click)="cvSelected.emit(cv)"
        >
          <img [src]="cv.path" [alt]="cv.firstname" class="rounded-circle" width="45" height="45" />
          {{ cv.firstname }} {{ cv.name }}
        </li>
      }
    </ul>
  `,
  styles: `
    .cv-item { cursor: pointer; }
    .row-even { background-color: #e2e3e5; }   /* gris   */
    .row-odd  { background-color: #cfe2ff; }   /* bleu   */
    .selected { font-weight: bold; border-left: 6px solid #0d6efd; }
  `,
})
export class CvListComponent {
  @Input({ required: true }) cvs: Cv[] = []; // liste reçue du parent
  @Input() selected: Cv | null = null;        // CV actuellement sélectionné
  @Output() cvSelected = new EventEmitter<Cv>(); // événement envoyé au parent
}
