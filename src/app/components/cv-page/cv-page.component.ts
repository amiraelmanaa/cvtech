import { Component, inject } from '@angular/core';
import { Cv } from '../../models/cv';
import { CvService } from '../../services/cv.service';
import { EmbaucheService } from '../../services/embauche.service';
import { CvListComponent } from '../cv-list/cv-list.component';
import { CvDetailComponent } from '../cv-detail/cv-detail.component';
import { EmbaucheListComponent } from '../embauche-list/embauche-list.component';

/**
 *
 * GESTION DE L'ÉTAT : c'est ICI que vit l'état "selectedCv". Les enfants
 * (liste et détail) ne se parlent jamais directement :
 *    CvList --(Output cvSelected)--> CvPage --(Input cv)--> CvDetail
 * Un seul propriétaire de l'état = pas d'incohérence entre les deux parties.
 */
@Component({
  selector: 'app-cv-page',
  imports: [CvListComponent, CvDetailComponent, EmbaucheListComponent],
  template: `
    <div class="row g-3">
      <div class="col-md-5">
        <app-cv-list [cvs]="cvs" [selected]="selectedCv" (cvSelected)="selectedCv = $event" />
      </div>
      <div class="col-md-7">
        <app-cv-detail [cv]="selectedCv" (embaucher)="embaucher($event)" />
        <app-embauche-list />
      </div>
    </div>
  `,
})
export class CvPageComponent {
  private cvService = inject(CvService);
  private embaucheService = inject(EmbaucheService);

  cvs: Cv[] = this.cvService.getCvs();
  selectedCv: Cv | null = null; // aucun CV sélectionné au départ

  embaucher(cv: Cv): void {
    this.embaucheService.embaucher(cv);
  }
}
