# CvTech — TP1 Angular RT4

## 1. Prérequis
- Node.js LTS (version paire récente, 20 / 22 ou plus) : https://nodejs.org
- npm (livré avec Node) — vérifier : `node -v` et `npm -v`
- Éditeur : VS Code + extension « Angular Language Service »

## 2. Installer Angular CLI (une seule fois)
    npm install -g @angular/cli
    ng version

(Windows : si « ng » est bloqué par PowerShell, exécuter une fois :
 `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`)

## 3. Lancer ce projet
    cd cvtech
    npm install          # installe toutes les dépendances du package.json (Angular + Bootstrap)
    ng serve -o          # compile et ouvre http://localhost:4200

## 4. Créer un projet from scratch (si vous voulez refaire le TP vous-même)
    ng new cvtech --routing --style=css
    cd cvtech
    npm install bootstrap
    # puis dans src/styles.css :
    #   @import "bootstrap/dist/css/bootstrap.min.css";
    ng generate component components/color     # idem pour les autres
    ng generate service services/cv
    ng generate directive directives/rainbow

## 5. Correspondance exercices ↔ fichiers
| Exo | Sujet | Fichier(s) |
|---|---|---|
| 1 | Div coloré + #ref + [style.x] | components/color |
| 2 | Calculateur TTC + remises | components/ttc |
| 3 | CvTech : liste + détail (gestion d'état) | cv-page, cv-list, cv-detail, models/cv.ts |
| 4 | Mini Word avec ngStyle | components/mini-word |
| 5 | Couleurs alternées (cvList) | cv-list ($odd/$even) |
| 6 | Directive arc-en-ciel (HostBinding/HostListener) | directives/rainbow.directive.ts |
| 7 | TodoService + composant | services/todo.service.ts, components/todo |
| 8 | WeekTodo | components/week-todo |
| 9 | CvService, EmbaucheService, liste embauchés, toast > 3 | services/*, embauche-list, toast |

## 6. Commandes utiles
    ng serve          # serveur de dev
    ng build          # build de production (dossier dist/)
    ng generate --help
