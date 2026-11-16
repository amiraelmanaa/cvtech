import { Injectable, inject, signal } from '@angular/core';
import { Cv } from '../models/cv';
import { ToastService } from './toast.service';

/**
 * EmbaucheService : gère la liste des personnes embauchées.
 * Il est partagé (singleton) : le composant qui embauche (CvPage) et celui qui
 * affiche la liste (EmbaucheList) voient donc exactement les mêmes données.
 */
@Injectable({ providedIn: 'root' })
export class EmbaucheService {
  private toast = inject(ToastService); // injection d'un service dans un service
  readonly BUDGET_MAX = 3; // au-delà de 3 embauchés => budget dépassé

  // Signal privé modifiable + version publique en lecture seule.
  private _embauches = signal<Cv[]>([]);
  readonly embauches = this._embauches.asReadonly();

  /** Vrai si ce CV est déjà dans la liste des embauchés. */
  isEmbauche(cv: Cv): boolean {
    return this._embauches().some((e) => e.id === cv.id);
  }

  /**
   * Embauche un CV. Retourne true si l'embauche a eu lieu.
   * - on refuse les doublons ;
   * - si on dépasse 3 embauchés on prévient le recruteur avec un toast.
   */
  embaucher(cv: Cv): boolean {
    if (this.isEmbauche(cv)) {
      this.toast.show(`${cv.firstname} ${cv.name} est déjà embauché(e).`, 'info');
      return false;
    }
    // update() crée un NOUVEAU tableau (immutabilité) => le signal notifie.
    this._embauches.update((list) => [...list, cv]);

    if (this._embauches().length > this.BUDGET_MAX) {
      this.toast.show('⚠ Attention : le budget est dépassé !', 'warning');
    } else {
      this.toast.show(`${cv.firstname} ${cv.name} a été embauché(e).`, 'success');
    }
    return true;
  }
}
