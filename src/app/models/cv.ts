/**
 * Modèle Cv : décrit un CV de la plateforme de recrutement.
 * On utilise une classe avec "parameter properties" (public devant chaque
 * paramètre du constructeur) : TypeScript crée et initialise les attributs
 * automatiquement pas besoin de les déclarer puis de les affecter à la main.
 */
export class Cv {
  constructor(
    public id: number,
    public name: string,
    public firstname: string,
    public age: number,
    public cin: string, //car elle peut commencer par 0
    public job: string,
    public path: string, // chemin de l'image (relatif au dossier /public)
  ) {}
}
