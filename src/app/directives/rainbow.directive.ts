import { Directive, HostBinding, HostListener } from '@angular/core';

/**
 * RainbowDirective : à chaque lettre tapée, la couleur du texte ET de la
 * bordure de l'<input> changent aléatoirement (effet arc-en-ciel).
 *
 * Le sélecteur "input[appRainbow]" signifie : « uniquement sur une balise
 * <input> qui possède l'attribut appRainbow ». Sur un <div appRainbow> ou un
 * <p appRainbow> la directive n'est PAS instanciée (exigence du sujet).
 */
@Directive({
  selector: 'input[appRainbow]',
})
export class RainbowDirective {
  // @HostBinding lie une propriété de la classe à une propriété du DOM de
  // l'élément hôte (ici le style de l'<input>). Valeur par défaut : noir.
  @HostBinding('style.color') color = 'black';
  @HostBinding('style.borderColor') borderColor = 'black';

  // @HostListener écoute un événement de l'élément hôte (keyup = touche relâchée).
  @HostListener('keyup')
  onKeyUp(): void {
    const color = this.getRandomColor();
    this.color = color;
    this.borderColor = color; // même couleur pour le texte et la bordure
  }

  /** Génère une couleur aléatoire au format rgb(r, g, b). */
  private getRandomColor(): string {
    const channel = () => Math.floor(Math.random() * 256); // entier 0..255
    return `rgb(${channel()}, ${channel()}, ${channel()})`;
  }
}
