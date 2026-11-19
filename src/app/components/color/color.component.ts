import { Component } from '@angular/core';

/**
 * Exercice 1 : on écrit une couleur dans l'input => le div prend cette couleur.
 * Le bouton remet la couleur par défaut.
 */
@Component({
  selector: 'app-color',
  templateUrl: 'color.component.html',
})
export class ColorComponent {
  readonly defaultColor = 'lightgray';
  color = this.defaultColor;

  reset(input: HTMLInputElement): void {
    this.color = this.defaultColor;
    input.value = ''; // on vide aussi le champ texte
  }
}
