import { legal as baseLegal } from './legal.mjs';
import { translatedLegal } from './legal-locales.mjs';
import { translate, businesses, details } from './locales.mjs';

const legal = { ...baseLegal };

const pages = {
  fr: {
    title: 'Fangys — Groupe et pôles d’activité', skip: 'Aller au contenu',
    group: 'Le Groupe', sectors: 'Nos secteurs', contact: 'Contact',
    heading: 'De Hong Kong à l’international',
    intro: 'Fangys opère en Europe, en Asie, aux États-Unis et en Afrique.',
    city: 'Victoria Harbour, Hong Kong',
    aboutHeading: 'Une société hongkongaise',
    explore: 'Découvrir les pôles', groupAction: 'Découvrir le groupe',
    about: 'FANGYS CORPORATION LIMITED est une société hongkongaise qui opère en Europe, en Asie, aux États-Unis et en Afrique.',
    sectorIntro: 'Les domaines ci-dessous présentent le portefeuille envisagé par le groupe.',
    cards: [
      ['Eau et hygiène', 'Traitement de l’eau, filtration et solutions d’hygiène professionnelle.'],
      ['Agriculture et agro-industrie', 'Productions agricoles et approvisionnement en produits bruts ou semi-finis.'],
      ['Santé', 'Équipements et consommables médicaux sur commande.'],
      ['Énergie', 'Solutions solaires, éoliennes et hybrides, ainsi que produits énergétiques.'],
      ['Commerce et sourcing', 'Recherche de produits et approvisionnement sur commande pour les entreprises.'],
      ['Numérique, télécoms et fintech', 'Projets de connectivité, de publication vidéo et de transferts d’argent.'],
      ['Hôtellerie et restauration', 'Projets d’hôtellerie, de restauration et de bars.'],
      ['Transport et logistique', 'Transport et logistique pour accompagner les flux de marchandises.'],
      ['Fondation FANGYS', 'Des axes d’engagement autour de la santé, de l’éducation et de l’accès aux services essentiels.'],
      ['Blanchisserie médicale', 'Équipements professionnels pour le traitement du linge des établissements de santé.'],
    ],
    contactText: 'Pour toute demande commerciale ou proposition de partenariat, contactez FANGYS.',
  },
  en: {
    title: 'Fangys — Group and business areas', skip: 'Skip to content',
    group: 'About the group', sectors: 'Business areas', contact: 'Contact',
    heading: 'From Hong Kong to the world',
    intro: 'Fangys operates in Europe, Asia, the United States and Africa.',
    city: 'Victoria Harbour, Hong Kong',
    aboutHeading: 'A Hong Kong company',
    explore: 'Explore business areas', groupAction: 'About the group',
    about: 'FANGYS CORPORATION LIMITED is a Hong Kong company operating in Europe, Asia, the United States and Africa.',
    sectorIntro: 'These areas outline the group’s proposed portfolio.',
    cards: [
      ['Water and hygiene', 'Water treatment, filtration and professional hygiene solutions.'],
      ['Agriculture and agribusiness', 'Agricultural production and sourcing of raw or semi-processed products.'],
      ['Health', 'Medical equipment and supplies sourced to order.'],
      ['Energy', 'Solar, wind and hybrid solutions, as well as energy products.'],
      ['Trade and sourcing', 'Product sourcing and procurement to order for businesses.'],
      ['Digital, telecoms and fintech', 'Projects in connectivity, video publishing and money transfers.'],
      ['Hospitality and dining', 'Hotel, restaurant and bar projects.'],
      ['Transport and logistics', 'Transport and logistics to support the movement of goods.'],
      ['FANGYS Foundation', 'Areas of engagement in health, education and access to essential services.'],
      ['Healthcare laundry', 'Professional laundry equipment for healthcare facilities.'],
    ],
    contactText: 'Contact FANGYS for business enquiries and partnership proposals.',
  },
};

const featured = {
  fr: [
    ['industrie-eau-hygiene.html', 0, 'Eau et hygiène', 'Ce pôle couvre le traitement de l’eau, la filtration et l’hygiène professionnelle. Pour une demande concernant des solutions BWT, précisez la qualité de l’eau, le débit et l’usage prévus.'],
    ['commerce-approvisionnement.html', 4, 'Commerce et approvisionnement B2B', 'Le pôle traite les besoins d’approvisionnement sur commande. Pour cadrer une demande, précisez le produit recherché, les quantités, les spécifications et le lieu de livraison.'],
    ['sante.html', 2, 'Santé', 'Équipements et consommables médicaux sur commande pour les établissements et professionnels. Pour cadrer la recherche, indiquez les références, les quantités et la destination.'],
    ['fondation.html', 8, 'Fondation FANGYS', 'Les axes envisagés couvrent la santé maternelle et infantile, la scolarisation des filles et l’accès à l’eau et à l’énergie. Les organisations intéressées peuvent proposer un partenariat en précisant le territoire, les besoins et les objectifs.'],
    ['energie.html', 3, 'Énergie', 'Le pôle couvre les solutions solaires, éoliennes et hybrides. Décrivez le site, les usages et les besoins en puissance pour orienter l’étude.'],
    ['blanchisserie-medicale.html', 9, 'Blanchisserie médicale', 'Solutions de blanchisserie professionnelle pour les établissements de santé. Pour une demande concernant les équipements Primus d’Alliance Laundry Systems, précisez le volume de linge, les cycles et les contraintes d’installation.'],
  ],
  en: [
    ['industry-water-hygiene.html', 0, 'Water and hygiene', 'This business area covers water treatment, filtration and professional hygiene. For enquiries about BWT solutions, specify the water quality, flow rate and intended use.'],
    ['trade-sourcing.html', 4, 'Trade and B2B sourcing', 'This business area covers sourcing to order. To scope an enquiry, include the product, quantities, specifications and delivery destination.'],
    ['health.html', 2, 'Health', 'Medical equipment and supplies sourced to order for healthcare facilities and professionals. Include product references, quantities and the destination in your enquiry.'],
    ['foundation.html', 8, 'FANGYS Foundation', 'Proposed areas of engagement include maternal and child health, girls’ education, and access to water and energy. Organisations interested in a partnership can share the location, needs and objectives of their proposal.'],
    ['energy.html', 3, 'Energy', 'This business area covers solar, wind and hybrid solutions. Describe the site, intended use and power requirements when making an enquiry.'],
    ['healthcare-laundry.html', 9, 'Healthcare laundry', 'Professional laundry solutions for healthcare facilities. For enquiries about Primus equipment from Alliance Laundry Systems, specify laundry volumes, wash cycles and installation requirements.'],
  ],
};
const routes = {
  fr: ['index.html', 'groupe.html', 'poles.html', 'contact.html', ...legal.fr.map(([file]) => file), ...featured.fr.map(([file]) => file)],
  en: ['index.html', 'group.html', 'business-areas.html', 'contact.html', ...legal.en.map(([file]) => file), ...featured.en.map(([file]) => file)],
};
for (const [locale, cards] of Object.entries(businesses)) {
  const tr = (key) => translate(locale, key);
  const en = pages.en;
  pages[locale] = {
    ...en, cards,
    ...Object.fromEntries(['group','sectors','contact','heading','skip','about','sectorIntro','contactText'].map((key) => [key, tr(en[key])])),
    explore: tr('View all business areas'), groupAction: tr('About the group'),
  };
  legal[locale] = translatedLegal[locale].map(([title, heading, copy], i) => [
    legal.en[i][0], title, heading, [[heading, copy]],
  ]);
  featured[locale] = featured.en.map(([path, index], i) => [path, index, cards[index][0], details[locale][i]]);
  routes[locale] = [...routes.en];
}
// Photos d’illustration Pexels. Voir SOURCES-IMAGES.md.
const sectorPhotos = [
  [12726229, 5092287, 'Équipements de traitement de l’eau', 'Water treatment equipment'],
  [33326126, 2255833, 'Machines agricoles pendant la récolte', 'Farm machinery during harvest'],
  [8943356, 38198207, 'Instruments et consommables médicaux', 'Medical instruments and supplies'],
  [35105466, 35105427, 'Installations solaires et éoliennes', 'Solar and wind installations'],
  [5156696, 4487383, 'Stockage et approvisionnement en entrepôt', 'Warehouse storage and procurement'],
  [5480781, 1624895, 'Infrastructure réseau et câblage', 'Network infrastructure and cabling'],
  [8918652, 19456977, 'Accueil hôtelier et salle de restaurant', 'Hotel lobby and restaurant dining room'],
  [13025947, 13766346, 'Conteneurs et transport routier dans un port', 'Port containers and road transport'],
  [7156163],
  [11213239],
];

const priorityIcons = {
  2: '<path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z"/>',
  8: '<path d="M12 20S3 15 3 8.7A4.7 4.7 0 0 1 12 7a4.7 4.7 0 0 1 9 1.7C21 15 12 20 12 20Z"/>',
  0: '<path d="M12 2c3 4.2 7 8.6 7 13a7 7 0 1 1-14 0c0-4.4 4-8.8 7-13Z"/><path d="M8 15a4 4 0 0 0 4 4"/>',
  3: '<path d="m13 2-9 12h7l-1 8 10-12h-7l1-8z"/>',
  9: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M4 7h16M8 4.5h.01m3 0h.01"/><circle cx="12" cy="14" r="4"/>',
};

const socialProfiles = {
  TikTok: '',
  Instagram: '',
  YouTube: '',
  Facebook: '',
};
const socialIcons = {
  TikTok: '<path d="M14 2h3c.3 2.8 2 4.6 5 5v3a9 9 0 0 1-5-1.6V16a6 6 0 1 1-6-6v3a3 3 0 1 0 3 3z"/>',
  Instagram: '<rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.2"/>',
  YouTube: '<path fill-rule="evenodd" d="M21.6 6.4C22 8 22 12 22 12s0 4-.4 5.6a2.5 2.5 0 0 1-1.8 1.8c-1.6.4-7.8.4-7.8.4s-6.2 0-7.8-.4a2.5 2.5 0 0 1-1.8-1.8C2 16 2 12 2 12s0-4 .4-5.6a2.5 2.5 0 0 1 1.8-1.8C5.8 4.2 12 4.2 12 4.2s6.2 0 7.8.4a2.5 2.5 0 0 1 1.8 1.8ZM10 8.5v7l6-3.5z"/>',
  Facebook: '<path d="M14 22v-9h3l.5-3H14V8c0-1 .3-1.6 1.6-1.6h2V3.7c-.8-.1-1.6-.2-2.5-.2-2.5 0-4.1 1.5-4.1 4.3V10H8v3h3v9z"/>',
};

export { pages, featured, routes, legal, sectorPhotos, priorityIcons, socialProfiles, socialIcons };
