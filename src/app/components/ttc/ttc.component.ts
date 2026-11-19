import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; //pour utiliser ngModel
import { CurrencyPipe } from '@angular/common';  //pour formater les nombres

/**
 * Exercice 2 : calculateur de prix TTC.
 * Valeurs par défaut : quantité = 1, prix = 0, TVA = 18 (%).
 * Remises (d'après la capture : 10 pièces => 0 de remise) :
 *   - quantité > 10 et <= 15 : 20 %
 *   - quantité > 15          : 30 %
 */

@Component({
  selector: 'app-ttc',
  imports: [FormsModule, CurrencyPipe], // ngModel + pipe currency
  template: `
    <h3>TTC Calculator</h3>
    <div class="row g-3">
      <div class="col-md-4">
        <!-- [(ngModel)] = two-way binding : la vue modifie la propriété
             et la propriété met à jour la vue. -->
        <input type="number" class="form-control" [(ngModel)]="prixHT" min="0" />
        <small>Prix HT</small>
      </div>
      <div class="col-md-4">
        <input type="number" class="form-control" [(ngModel)]="quantite" min="1" />
        <small>Quantité</small>
      </div>
      <div class="col-md-4">
        <input type="number" class="form-control" [(ngModel)]="tva" min="0" />
        <small>TVA (%)</small>
      </div>
    </div>

    <div class="row g-3 mt-2">
      <div class="col-md-4">
        <div class="alert alert-info">Prix unitaire TTC : {{ prixUnitaireTTC | currency: 'USD' }}</div>
      </div>
      <div class="col-md-4">
        <div class="alert alert-success">Prix total TTC : {{ prixTotalTTC | currency: 'USD' }}</div>
      </div>
      <div class="col-md-4">
        <div class="alert alert-danger">Discount : {{ montantRemise | currency: 'USD' }} ({{ tauxRemise * 100 }}%)</div>
      </div>
    </div>
  `,
})
export class TtcComponent {
  prixHT = 0;
  quantite = 1;
  tva = 18;

  // Les getters sont recalculés à chaque changement : pas besoin de bouton « Calculer »

  /** Prix d'une pièce avec TVA : HT * (1 + TVA/100) */
  get prixUnitaireTTC(): number {
    return this.prixHT * (1 + this.tva / 100);
  }

  /** Taux de remise selon la quantité. */
  get tauxRemise(): number {
    if (this.quantite > 15) return 0.3; // 15 dabord car sinon 20% serait pris pour les quantités > 15
    if (this.quantite > 10) return 0.2;
    return 0;
  }

  /** Montant de la remise sur le total. */
  get montantRemise(): number {
    return this.prixUnitaireTTC * this.quantite * this.tauxRemise;
  }

  /** Total à payer = (unitaire * quantité) - remise. */
  get prixTotalTTC(): number {
    return this.prixUnitaireTTC * this.quantite - this.montantRemise;
  }
}
