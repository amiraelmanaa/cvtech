import { Component } from '@angular/core';

/**
 * Exercice 1 : on écrit une couleur dans l'input => le div prend cette couleur.
 * Le bouton remet la couleur par défaut.
 */
@Component({
  selector: 'app-color',
  template: `
    <h3>Color</h3>

    <!-- #colorInput = variable de template : référence vers l'élément DOM.
         On lit sa valeur avec colorInput.value.
         (input) = événement déclenché à chaque modification du texte. -->
    <input
      #colorInput
      type="text"
      class="form-control mb-3"
      placeholder="Écrivez une couleur : red, #ff8800, rgb(0,0,255)..."
      (input)="color = colorInput.value"
    />

    <!-- [style.backgroundColor] = property binding sur UNE propriété CSS.
         Si la couleur saisie est invalide, le navigateur l'ignore (fond inchangé). -->
    <div class="p-5 rounded border" [style.backgroundColor]="color">
      Ce div change de couleur : {{ color }}
    </div>

    <!-- On passe colorInput à la méthode pour pouvoir vider l'input aussi -->
    <button class="btn btn-secondary mt-3" (click)="reset(colorInput)">
      Couleur par défaut
    </button>
  `,
})
export class ColorComponent {
  readonly defaultColor = 'lightgray';
  color = this.defaultColor;

  reset(input: HTMLInputElement): void {
    this.color = this.defaultColor;
    input.value = ''; // on vide aussi le champ texte
  }
}
