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
    new Cv(1, 'El manaa', 'amira', 22, '01234567', 'Etudiante RT', 'images/avatar1.svg'),
    new Cv(2, 'Garbaa', 'aziza', 22, '07654321', 'Étudiante RT', 'images/avatar2.svg'),
    new Cv(3, 'Islem', 'briki', 22, '11223344', 'Étudiante RT', 'images/default.svg'),
    new Cv(4, 'Iheb ', 'khlif', 30, '44332211', 'Développeur Angular', 'images/default.svg'),
    new Cv(5, 'Raslen', 'Moussa', 36, '55667788', 'Data analyst', 'images/avatar1.svg'),
    new Cv(6, 'ameni', 'khadhraoui', 22, '11229844', 'Étudiante RT', 'images/default.svg'),
    new Cv(7, 'belkis', 'ghedir', 22, '11223344', 'Étudiante RT', 'images/default.svg'),
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
