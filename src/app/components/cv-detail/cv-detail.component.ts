import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cv } from '../../models/cv';

/**
 * Reçoit le CV par @Input, émet "embaucher" quand on clique sur le bouton
 */
@Component({
  selector: 'app-cv-detail',
  templateUrl: 'cv-detail.component.html',
})
export class CvDetailComponent {
  @Input() cv: Cv | null = null;
  @Output() embaucher = new EventEmitter<Cv>();
}
