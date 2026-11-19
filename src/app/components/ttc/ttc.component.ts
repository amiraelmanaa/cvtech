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
  templateUrl: 'ttc.component.html',
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
