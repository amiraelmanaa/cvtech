import { Directive,
   HostBinding,
   HostListener } from '@angular/core';


@Directive({
  selector: 'input[appRainbow]', //appliquer cette directive uniquement aux balises input qui possèdent l'attribut appRainbow
})
export class RainbowDirective {
  // @HostBinding lie une propriété de la classe à une propriété du DOM de
  // l'élément hôte (ici le style de l'<input>)
  @HostBinding('style.color')
   color = 'black';

  @HostBinding('style.borderColor')
   borderColor = 'black';

  // @HostListener écoute un événement de l'élément hôte (keyup = touche relâchée)
  @HostListener('keyup')
  onKeyUp(): void {
    const color = this.getRandomColor();
    this.color = color;
    this.borderColor = color; // même couleur pour le texte et la bordure
  }

  /** Génère une couleur aléatoire au format rgb(r, g, b). */
  private getRandomColor(): string {
    const channel = () => Math.floor(Math.random() * 256); // entier 0..255
    return `rgb(${channel()},
                ${channel()},
                ${channel()})`;
  }
}
