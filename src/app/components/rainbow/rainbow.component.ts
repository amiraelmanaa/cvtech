import { Component } from '@angular/core';
import { RainbowDirective } from '../../directives/rainbow.directive';

// Exercice 6 : démonstration de la directive appRainbow
@Component({
  selector: 'app-rainbow',
  imports: [RainbowDirective], // une directive standalone s'importe comme un composant
  template: `
    <h3>Rainbow</h3>

    <input appRainbow type="text" class="form-control" placeholder="Tapez du texte..." />

    <p appRainbow class="mt-3 text-muted">Cette balise &lt;p&gt; ne réagit pas (la directive n'y est pas appliquée).</p>
  `,
})
export class RainbowComponent {}
