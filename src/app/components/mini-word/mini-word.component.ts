import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-mini-word',
  imports: [FormsModule, NgStyle],
  template: `
    <h3>Mini Word</h3>

    <p [ngStyle]="{ color: color, 
    'font-size.px': size,
    'font-family': font
     }">
      Test : modifiez la couleur, la taille et la police.
    </p>

    <div class="row g-3">
      <div class="col-md-4">
        <input
         type="color"
         class="form-control form-control-color w-100"
         [(ngModel)]="color" />
      </div>
      <div class="col-md-4">
        <input
         type="number"
         class="form-control"
          min="8" max="100" 
          [(ngModel)]="size" />
      </div>
      
      <div class="col-md-4">
        <select class="form-select" [(ngModel)]="font">
          @for (f of fonts; track f) {
            <option [value]="f">{{ f }}</option>
          }
        </select>
      </div>
    </div>
  `,
})
export class MiniWordComponent {
  color = '#2e7d32';
  size = 30;
  font = 'Arial';
  fonts = ['Arial', 'Verdana', 'Times New Roman', 'Courier New', 'Georgia', 'Comic Sans MS'];
}
