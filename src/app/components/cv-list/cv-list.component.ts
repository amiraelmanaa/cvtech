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
  templateUrl: 'cv-list.component.html',
  styleUrls: ['cv-list.component.css'],
  
})
export class CvListComponent {
  @Input({ required: true }) cvs: Cv[] = []; // liste reçue du parent
  @Input() selected: Cv | null = null;        // CV actuellement sélectionné
  @Output() cvSelected = new EventEmitter<Cv>(); // événement envoyé au parent
}
