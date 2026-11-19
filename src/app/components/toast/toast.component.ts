import { Component, inject } from '@angular/core';
import { ToastService } from '../../services/toast.service';

/** Conteneur de toasts, placé une seule fois dans app.html (en haut à droite). */
@Component({
  selector: 'app-toast',
  templateUrl: 'toast.component.html',
})
export class ToastComponent {
  toastService = inject(ToastService);
}
