import { Injectable } from '@angular/core';
import { Cv } from '../models/cv';

/**
 * CvService : source unique de vérité pour la liste des CVs.
 * "providedIn: 'root'" => Angular crée UNE SEULE instance (singleton) partagée
 * par toute l'application, sans avoir à l'ajouter dans un tableau "providers".
 */
@Injectable({ providedIn: 'root' })
export class CvService {
  // Pour le moment les données sont en dur (plus tard : appel HTTP vers une API).
  private cvs: Cv[] = [
    new Cv(1, 'Sellaouti', 'Aymen', 38, '01234567', 'Enseignant chercheur', 'images/avatar1.svg'),
    new Cv(2, 'Sellaouti', 'Skander', 7, '07654321', 'Étudiant', 'images/avatar2.svg'),
    new Cv(3, 'Chaabane', 'Mahdi', 28, '11223344', 'Web designer', 'images/default.svg'),
    new Cv(4, 'Fkih', 'Mehdi', 30, '44332211', 'Développeur Angular', 'images/default.svg'),
    new Cv(5, 'Ben Salah', 'Sarra', 26, '55667788', 'Data analyst', 'images/avatar1.svg'),
  ];

  /** Retourne la liste complète des CVs. */
  getCvs(): Cv[] {
    return this.cvs;
  }

  /** Retourne un CV par son id (ou undefined s'il n'existe pas). */
  getCvById(id: number): Cv | undefined {
    return this.cvs.find((cv) => cv.id === id);
  }
}
