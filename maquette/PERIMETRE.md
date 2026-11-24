# Première version du site Fangys

La proposition couvre quatre pages publiques par langue. Le contenu et les liens sont intégrés directement dans le HTML.

- **Accueil** présente le groupe et donne un accès direct aux pôles.
- **Le Groupe** présente la vision et l’entité hongkongaise documentée.
- **Pôles d’activité** présente les huit domaines du brief. Les fiches détaillées pourront indiquer les offres, publics et territoires à mesure que ces informations seront confirmées.
- **Contact** distingue demandes commerciales et partenariats. Le canal et les destinataires restent à confirmer avant d’activer la prise de contact.

La Fondation et les projets pourront recevoir une page dédiée lorsque les éléments éditoriaux seront disponibles. Les produits transactionnels demandent un cadrage distinct.

La direction proposée associe le logo angulaire fourni, le marine `#12243A` pour les surfaces institutionnelles, le corail `#FF624E` pour l’action principale et le gris clair `#F3F5F7` pour l’index des pôles. Les titres utilisent Georgia avec Times New Roman en repli. L’interface utilise la police système. La grille en deux colonnes passe sur une colonne sous 720 px.

La photographie présente Victoria Harbour. Elle situe le récit géographiquement. Crédit lumoplank, [Wikimedia Commons, CC0](https://commons.wikimedia.org/wiki/File:Hong_Kong,_Part_1_-_HongKong8660.jpg).

Les sites de [Swire](https://www.swire.com/), [Jardines](https://www.jardines.com/), [CK Hutchison](https://www.ckh.com.hk/en/global/home.php), [Wharf](https://www.wharfholdings.com/en) et [Sino Group](https://www.sino.com/) ont été consultés le 24 novembre 2026. La lecture de la structure de Swire, Jardines et Wharf a conforté deux choix pour Fangys. Présenter le groupe dès l’ouverture et rendre son portefeuille accessible directement dans la navigation. La consultation était principalement textuelle et ne permet pas de classer la qualité visuelle de ces sites.

Une fois l’URL publique confirmée, renseigner `FANGYS_SITE_URL` lors de l’exécution de `node maquette/build.mjs` pour produire les liens canoniques, les liens `hreflang` absolus et les URL des images de partage. Prévoir le sitemap au moment du déploiement. Confirmer les coordonnées et le service d'envoi avant d'activer la transmission des demandes.

Ouvrir `index.html` dans un navigateur. Le sélecteur de langue ouvre la page équivalente. Après modification des contenus dans `build.mjs`, exécuter `node maquette/build.mjs` depuis la racine pour régénérer les huit pages. Le script navigateur gère la préférence de contraste et la préparation d'un brouillon de contact.
