import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-mini-word',
  imports: [FormsModule, NgStyle],
  templateUrl: 'mini-word.component.html',
})
export class MiniWordComponent {
  color = '#2e7d32';
  size = 30;
  font = 'Arial';
  fonts = ['Arial', 'Verdana', 'Times New Roman', 'Courier New', 'Georgia', 'Comic Sans MS'];
}
