# Conformité du site au cahier des charges de l’ASROC

Ce document compare la maquette actuelle du site (`09guyzo/ascor`) au cahier des charges fourni par l’ASROC. Il liste ce qui est conforme, ce qui a été ajusté et ce qui reste à décider ou à fournir.

Légende : **Conforme** · **Ajusté** (modifié pour être conforme) · **À fournir** (contenu attendu de l’ASROC) · **À décider** (choix technique ou budgétaire).

## 3. Rubriques

| # | Rubrique demandée | Statut | Où sur le site |
|---|---|---|---|
| 1 | Accueil : présentation, actualités récentes, accès rapide | **Ajusté** | `index.html`. La section « Actualités & récits » devient « Actualités récentes » avec des articles datés et un lien vers toutes les actualités. Les boutons mènent aux nouvelles pages. |
| 2 | À propos : historique, missions, vision, gouvernance, organisation | **Ajusté** | `association.html`. Ajout de la section **Gouvernance et organisation** (Assemblée générale, Bureau exécutif, Secrétariat permanent, groupes de travail). |
| 3 | Nos membres | **Conforme** | `membres.html` |
| 4 | La filière : activités, enjeux, perspectives | **Ajusté** | Nouvelle page `filiere.html` |
| 5 | Actualités et communiqués | **Ajusté** | `communication.html`, refaite. Elle contient une vraie liste d’actualités datées et sourcées avec un filtre, plus les sections Communiqués, Agenda et Médiathèque. Avant, il n’y avait que des cartes vides. |
| 6 | Publications et documents téléchargeables | **Ajusté** | Nouvelle page `publications.html` : documents en PDF, filtres par type, mention sur les documents réservés. |
| 7 | Actions et plaidoyer (structuration, qualité, pratiques illicites) | **Ajusté** | Nouvelle page `actions.html`, organisée autour des trois axes du cahier, plus le dialogue institutionnel et la méthode. |
| 8 | Contact : coordonnées, formulaire, réseaux sociaux | **Conforme** pour le formulaire et l’e-mail. **À fournir** pour les réseaux sociaux | `contact.html` |
| 9 | Espace membres (optionnel) | **Phase 2** | Le cahier recommande de commencer par un site institutionnel simple. Aucun espace membres n’est publié pour l’instant. |

Le menu principal donne maintenant accès aux 8 rubriques, plus le bouton Adhésion. Il se replie en menu hamburger sur tablette et sur mobile (jusqu’à 1100 px de large).

## 4. Langues et présentation

| Exigence | Statut | Commentaire |
|---|---|---|
| Français et anglais | **Ajusté** | Toutes les nouvelles pages et sections sont traduites, ainsi que les textes alternatifs des images et les exemples dans les formulaires qui manquaient (`i18n.js`). |
| Ordinateur, tablette, téléphone | **Ajusté** | Vérifié à 1440, 1024, 800 et 390 px. Le menu ne déborde plus sur tablette. Le bouton de menu vide qui apparaissait sur ordinateur a été supprimé. |
| Design professionnel et identité ASROC | **Conforme** | Mêmes couleurs, typographies et composants sur toutes les pages (`pages.css`). |
| Maquette avant développement | **Conforme** | Le site actuel tient lieu de maquette à faire valider par l’ASROC. |
| Contenus validés par l’ASROC | **À fournir** | Voir la liste « Contenus à fournir » plus bas. |

## 5. Fonctionnalités d’administration — **À décider**

Le site est aujourd’hui fait de pages HTML statiques. Une personne non technique ne peut **pas** publier une actualité, ajouter un document, gérer les deux langues ou attribuer des niveaux d’accès sans modifier le code. C’est le principal écart avec le cahier des charges.

Deux options pour la phase de développement :

1. **CMS « headless » branché sur la maquette actuelle** (par exemple Sanity ou Strapi). Le design et l’hébergement Vercel sont conservés. Les actualités, les documents et les textes FR/EN sont saisis dans une interface d’administration, avec des rôles (administrateur, éditeur). L’effort est moyen.
2. **Migration vers WordPress**, avec Polylang pour le bilinguisme. C’est une solution très répandue, facile à former, avec des rôles natifs. Il faut reconstruire le thème à partir de la maquette et prévoir un hébergement PHP.

Recommandation : l’option 1. Elle préserve tout le travail réalisé et correspond à l’orientation du cahier, qui demande d’abord un site simple, sécurisé et facile à mettre à jour. Les pages Actualités et Publications sont déjà structurées en listes, ce qui facilite leur branchement sur un CMS.

## 5–7. Sécurité, statistiques, livrables

| Exigence | Statut | Commentaire |
|---|---|---|
| Sécurisation des formulaires | **Conforme** | FormSubmit, champ piège anti-robots (`_honey`) et captcha FormSubmit par défaut. Pièces jointes limitées à 10 Mo. |
| Suivi de fréquentation conforme | **Ajusté** | Le script Vercel Web Analytics est ajouté sur toutes les pages. Il ne pose pas de cookie, donc aucun bandeau de consentement n’est nécessaire. **Il faut l’activer dans le tableau de bord Vercel** (Projet → Analytics → Enable). En attendant, le script renvoie une erreur 404 sans conséquence pour les visiteurs. |
| Sauvegarde | **Partiel** | Tout le code est versionné sur GitHub et Vercel conserve les déploiements précédents. Il faudra ajouter la sauvegarde des contenus du CMS une fois celui-ci choisi. |
| Nom de domaine, hébergement, accès remis à l’ASROC | **À décider** | Relier `asroc-cm.org` à Vercel et transférer la propriété du dépôt, du projet Vercel et du domaine à un compte de l’ASROC. |
| Formation, documentation, garantie | **À prévoir** | À chiffrer dans le devis, une fois le CMS choisi. |

## Contenus à fournir par l’ASROC

- Les liens des **réseaux sociaux** de l’ASROC (LinkedIn, Facebook…) pour la page Contact et le pied de page.
- Les **coordonnées complètes** : adresse postale, téléphone.
- La **gouvernance** : confirmation des instances selon les statuts et noms des responsables. La section actuelle présente une organisation type, signalée comme « à valider ».
- Les **chiffres clés de la filière** : production, capacités, emplois.
- Les **communiqués**, l’**agenda** et les **rapports ou notes de position** à publier. Ces rubriques affichent pour l’instant un message « aucun contenu pour le moment ».
- La confirmation du nom exact d’un membre : « SRM **Maya** & Cie » sur l’accueil, mais « SRM **Naya** & Cie » sur la page Membres.

Les actualités et documents déjà présents proviennent uniquement de sources publiques citées : Ecofinances, Actu Cameroun, Cameroon Tribune, le plan MINEPAT 2024 et la plaquette ASROC.
