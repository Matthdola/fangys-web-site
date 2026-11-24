# Site web FANGYS — Instructions des agents

## Mission

Construire et maintenir un site institutionnel crédible pour le groupe FANGYS. Le site public doit présenter le groupe, ses pôles d'activité, sa présence géographique et ses parcours de contact en français et en anglais.

## Source de vérité

1. Lire `.agents/shared/project-brief.md` avant toute décision de produit, contenu, design ou architecture.
2. Considérer `VISION GLOBAL FANGYS.CO.HK.docx` comme le brief original du client.
3. Considérer `fangys_registration_document.jpeg` comme la source officielle pour l'identité et l'immatriculation de l'entité hongkongaise.
4. Ne jamais inventer de faits, certifications, adresses, partenariats, zones d'activité, prix ou résultats.
5. Tout élément marqué `[À CONFIRMER]` reste un brouillon ou un placeholder jusqu'à validation du propriétaire.

## Identité légale confirmée

- Nom légal exact : `FANGYS CORPORATION LIMITED`.
- Juridiction d'immatriculation : Hong Kong.
- Statut indiqué : `BODY CORPORATE`.
- Adresse enregistrée : `FLAT/RM 1618A, 16/F, PIONEER CTR, 750 NATHAN RD, MONG KOK, HONG KONG`.
- Certificat d'enregistrement commercial : `80183498-000-04-26-4`.
- Période de validité du certificat fourni : du 13 avril 2026 au 12 avril 2027.
- Nature d'activité portée sur le certificat : `CORP`.

Employer le nom légal sans modification dans les mentions légales, contrats, formulaires institutionnels et données structurées. Ne pas présenter l'adresse enregistrée comme un siège opérationnel, un magasin ou un lieu accueillant le public sans confirmation. Le certificat ne prouve pas à lui seul que les obligations légales ou licences propres aux activités réglementées sont satisfaites.

## Exigences linguistiques du site

- Chaque page publique et chaque contenu réutilisable doivent exister en français et en anglais.
- Les deux versions doivent communiquer les mêmes faits, avec une formulation naturelle dans chaque langue plutôt qu'une traduction mot à mot.
- Le français sert de langue de référence pour interpréter le brief original.
- L'anglais doit employer une terminologie professionnelle adaptée à un public international.
- Les noms de marques et de produits restent inchangés sauf correction validée par le propriétaire.
- Les instructions internes et les configurations d'agents sont rédigées uniquement en français.

## Équipe d'agents

Pour toute tâche liée à l'accueil ou à l'identité visuelle, consulter la revue des références graphiques dans le brief partagé. La maquette d'accueil et les pistes de logo servent de références de conception à valider.

Choisir le plus petit nombre de rôles nécessaire pour chaque tâche.

| Rôle | Configuration | Responsabilités |
|---|---|---|
| Architecte produit | `.agents/fr/architecte-produit.md` | Périmètre, arborescence, modèle de données et choix techniques |
| Designer marque et UX | `.agents/fr/designer-marque-ux.md` | Direction visuelle, navigation, maquettes et accessibilité |
| Ingénieur frontend | `.agents/fr/ingenieur-frontend.md` | Implémentation, composants, internationalisation et performance |
| Stratégiste de contenu bilingue | `.agents/fr/strategiste-contenu-bilingue.md` | Rédaction, traduction, terminologie et appels à l'action |
| Spécialiste SEO et croissance | `.agents/fr/specialiste-seo-croissance.md` | Visibilité, métadonnées, données structurées et mesure |
| Revue QA, accessibilité et conformité | `.agents/fr/qa-accessibilite-conformite.md` | Tests, accessibilité, sécurité et contrôle des affirmations réglementées |

## Méthode de collaboration

1. L'architecte produit définit le périmètre, l'arborescence, le modèle de contenu et les critères d'acceptation.
2. Les rôles marque/UX et contenu définissent l'intention des pages, leur hiérarchie, le ton et les textes bilingues.
3. L'ingénieur frontend implémente les structures et contrats de contenu validés.
4. Le spécialiste SEO contrôle la découvrabilité sans dégrader la lisibilité.
5. Le rôle QA valide les deux langues, le responsive, l'accessibilité, les performances, les formulaires et la cohérence factuelle.
6. Le rôle qui réalise une tâche en assure la transmission : fichiers modifiés, validations effectuées, hypothèses et confirmations restantes.

## Standards obligatoires

- Concevoir mobile-first avec HTML sémantique, navigation au clavier, focus visible, contrastes suffisants et textes alternatifs pertinents.
- Viser WCAG 2.2 AA et de bons Core Web Vitals.
- Utiliser des routes localisées comme `/fr/...` et `/en/...`, avec un sélecteur de langue qui conserve la page équivalente.
- Séparer les traductions des composants d'interface lorsque la stack le permet. Ne jamais mélanger les deux langues dans un même champ public.
- Tous les formulaires doivent avoir des labels, une validation, des états de succès et d'erreur, les consentements nécessaires et une protection anti-spam.
- Appliquer la minimisation des données. Ne jamais versionner de secrets, identifiants, données personnelles ou clés de production.
- Les affirmations médicales, pharmaceutiques, phytosanitaires, financières, télécoms, énergétiques et caritatives exigent une validation explicite du propriétaire et, si nécessaire, une revue juridique.
- Le numéro du certificat ne doit apparaître que dans les contextes institutionnels nécessaires. Ne jamais publier l'image complète du certificat sans validation, car sa reproduction intégrale n'est pas requise pour présenter l'entreprise.
- Ne pas suggérer une autorisation réglementaire, un résultat garanti, un partenariat officiel ou une activité réelle dans un pays sans preuve.
- Respecter la stack du dépôt et n'ajouter une dépendance qu'en présence d'un besoin concret.

## Définition de terminé

- Les critères d'acceptation sont satisfaits en français et en anglais.
- La navigation, les liens, les formulaires, le responsive et le changement de langue ont été testés.
- Il ne reste aucune clé de traduction manquante ni chaîne publique non traduite.
- Les contrôles d'accessibilité et de performance adaptés à la modification réussissent.
- Toute nouvelle affirmation est reliée au brief ou explicitement signalée comme étant à confirmer.
- La documentation est actualisée lorsque l'architecture, la structure du contenu ou les procédures changent.

