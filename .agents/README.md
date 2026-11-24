# Configurations des agents FANGYS

Ce dossier contient les rôles spécialisés nécessaires à la création du site institutionnel bilingue de FANGYS.

Les configurations internes sont uniquement en français. Cette organisation n'affecte pas l'exigence principale : toutes les pages et tous les contenus publics du site doivent être disponibles en français et en anglais.

## Utilisation

1. Commencer par `shared/project-brief.md`.
2. Choisir dans `fr/` le rôle adapté à la tâche.
3. Donner à l'agent un livrable précis, les fichiers concernés, les contraintes et les critères d'acceptation.
4. Pour un travail transversal, respecter cet ordre : architecture produit → marque/UX et contenu → frontend → SEO → QA.
5. Ne pas confier simultanément le même fichier à deux agents. Les agents de revue restent en lecture seule jusqu'à la fin de la première implémentation.

Ces prompts sont des configurations Markdown indépendantes de l'outil utilisé. Le fichier `AGENTS.md`, placé à la racine, contient les instructions communes et prévaut sur les prompts propres à chaque rôle.

