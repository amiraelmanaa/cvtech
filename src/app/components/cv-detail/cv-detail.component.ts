import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cv } from '../../models/cv';

/**
 * Reçoit le CV par @Input, émet "embaucher" quand on clique sur le bouton
 */
@Component({
  selector: 'app-cv-detail',
  template: `
    @if (cv) {
      <div class="card text-center shadow-sm">
        <div class="card-body">
          <img [src]="cv.path" [alt]="cv.name" class="rounded-circle mb-3" width="100" height="100" />
          <h4>{{ cv.firstname }} {{ cv.name }}</h4>
          <p class="text-muted">{{ cv.job }}</p>
          <ul class="list-unstyled">
            <li><strong>Id :</strong> {{ cv.id }}</li>
            <li><strong>Âge :</strong> {{ cv.age }} ans</li>
            <li><strong>CIN :</strong> {{ cv.cin }}</li>
          </ul>
        </div>
        <div class="card-footer">
          <button class="btn btn-primary" (click)="embaucher.emit(cv)">Embaucher</button>
        </div>
      </div>
    } @else {
      <div class="alert alert-secondary">Cliquez sur un CV pour voir son détail.</div>
    }
  `,
})
export class CvDetailComponent {
  @Input() cv: Cv | null = null;
  @Output() embaucher = new EventEmitter<Cv>();
}
