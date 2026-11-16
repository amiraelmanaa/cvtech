import { Injectable, signal } from '@angular/core';

export type ToastType = 'success' | 'warning' | 'danger' | 'info';

export interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

/**
 * ToastService : affiche de petites notifications (toasts).
 * On l'écrit nous-mêmes pour éviter une dépendance externe (ngx-toastr).
 * La liste est un SIGNAL : dès qu'elle change, le composant <app-toast>
 * qui la lit est automatiquement rafraîchi (même sans zone.js).
 */
@Injectable({ providedIn: 'root' })
export class ToastService {
  toasts = signal<Toast[]>([]);
  private nextId = 0;

  /** Affiche un toast puis le supprime automatiquement après "duration" ms. */
  show(message: string, type: ToastType = 'info', duration = 4000): void {
    const id = this.nextId++;
    this.toasts.update((list) => [...list, { id, message, type }]);
    setTimeout(() => this.remove(id), duration);
  }

  remove(id: number): void {
    this.toasts.update((list) => list.filter((t) => t.id !== id));
  }
}
