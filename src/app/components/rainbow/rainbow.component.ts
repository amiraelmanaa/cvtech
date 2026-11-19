import { Component } from '@angular/core';
import { RainbowDirective } from '../../directives/rainbow.directive';

// Exercice 6 : démonstration de la directive appRainbow
@Component({
  selector: 'app-rainbow',
  imports: [RainbowDirective], // une directive standalone s'importe comme un composant
  templateUrl: 'rainbow.component.html',
})
export class RainbowComponent {}
