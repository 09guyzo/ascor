# ASROC — maquette du site

Maquette statique de présentation de l’Association des Raffineurs des Oléagineux du Cameroun.

## Déploiement Vercel

Le site est servi depuis `index.html` à la racine. Il s’agit d’une page autonome : les photos et le logo affichés sont intégrés directement dans le HTML. Aucun framework, commande de build ou variable d’environnement n’est nécessaire.

Pour déployer : importer le dépôt GitHub `09guyzo/ascor` dans Vercel, garder le répertoire racine du projet, puis lancer le déploiement. Le preset peut rester sur `Other` et les champs Build Command et Output Directory vides.

## Fichiers

- `index.html` : page d’accueil prête à déployer.
- `assets/` : fichiers logo fournis séparément.
- `design/asroc-flyer.svg` : visuel flyer.
- `source/` : maquette HTML complète et prototype du slider.
