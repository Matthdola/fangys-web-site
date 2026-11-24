import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const pages = {
  fr: {
    title: 'Fangys — Groupe et pôles d’activité', skip: 'Aller au contenu',
    group: 'Le Groupe', sectors: 'Pôles d’activité', contact: 'Contact',
    heading: 'De Hong Kong à l’international',
    intro: 'Fangys opère en Europe, en Asie, aux États-Unis et en Afrique.',
    city: 'Victoria Harbour, Hong Kong',
    aboutHeading: 'Une société hongkongaise',
    explore: 'Découvrir les pôles', groupAction: 'Découvrir le groupe',
    about: 'FANGYS CORPORATION LIMITED est une société hongkongaise qui opère en Europe, en Asie, aux États-Unis et en Afrique.',
    sectorIntro: 'Les domaines ci-dessous présentent le portefeuille envisagé par le groupe.',
    cards: [
      ['Industrie, eau et hygiène', 'Traitement de l’eau, filtration, équipements et blanchisserie professionnelle.'],
      ['Agriculture et agro-industrie', 'Productions agricoles et approvisionnement en produits bruts ou semi-finis.'],
      ['Santé', 'Équipements et consommables médicaux sur commande.'],
      ['Énergie', 'Solutions solaires, éoliennes et hybrides, ainsi que produits énergétiques.'],
      ['Commerce et sourcing', 'Recherche de produits et approvisionnement sur commande pour les entreprises.'],
      ['Numérique, télécoms et fintech', 'Projets de connectivité, de publication vidéo et de transferts d’argent.'],
      ['Hôtellerie et restauration', 'Projets d’hôtellerie, de restauration et de bars.'],
      ['Transport et logistique', 'Transport et logistique pour accompagner les flux de marchandises.'],
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
      ['Industry, water and hygiene', 'Water treatment, filtration, equipment and professional laundry.'],
      ['Agriculture and agribusiness', 'Agricultural production and sourcing of raw or semi-processed products.'],
      ['Health', 'Medical equipment and supplies sourced to order.'],
      ['Energy', 'Solar, wind and hybrid solutions, as well as energy products.'],
      ['Trade and sourcing', 'Product sourcing and procurement to order for businesses.'],
      ['Digital, telecoms and fintech', 'Projects in connectivity, video publishing and money transfers.'],
      ['Hospitality and dining', 'Hotel, restaurant and bar projects.'],
      ['Transport and logistics', 'Transport and logistics to support the movement of goods.'],
    ],
    contactText: 'Contact FANGYS for business enquiries and partnership proposals.',
  },
};

export const routes = {
  fr: ['index.html', 'groupe.html', 'poles.html', 'contact.html'],
  en: ['index.html', 'group.html', 'business-areas.html', 'contact.html'],
};
const outputDir = process.env.FANGYS_OUTPUT_DIR
  ? pathToFileURL(resolve(process.env.FANGYS_OUTPUT_DIR) + '/')
  : new URL('./', import.meta.url);

const siteUrl = process.env.FANGYS_SITE_URL
  ? new URL(process.env.FANGYS_SITE_URL.replace(/\/?$/, '/'))
  : null;
const publicUrl = (path) => siteUrl ? new URL(path, siteUrl).href : null;
const escapeAttr = (text) => text.replace(/[&"<>]/g, (char) => ({
  '&': '&amp;', '"': '&quot;', '<': '&lt;', '>': '&gt;',
})[char]);

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
];

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

for (const [lang, t] of Object.entries(pages)) {
  const fr = lang === 'fr';
  const other = fr ? 'en' : 'fr';
  const [home, group, sectors, contact] = routes[lang];
  const labels = [fr ? 'Accueil' : 'Home', t.group, t.sectors, t.contact];
  const seo = fr ? [
    ['Fangys | Société internationale de Hong Kong', 'Découvrez Fangys, société hongkongaise qui opère en Europe, en Asie, aux États-Unis et en Afrique, et explorez ses pôles d’activité.'],
    ['Le groupe Fangys | Société hongkongaise', 'Découvrez FANGYS CORPORATION LIMITED, société hongkongaise qui opère en Europe, en Asie, aux États-Unis et en Afrique.'],
    ['Pôles d’activité | Fangys', 'Explorez les pôles de Fangys, de l’industrie et du traitement de l’eau au commerce, à l’énergie, au numérique et à la logistique.'],
    ['Contacter Fangys | Demandes et partenariats', 'Consultez le formulaire de contact de Fangys pour préparer une demande commerciale ou une proposition de partenariat.'],
  ] : [
    ['Fangys | International Hong Kong Company', 'Discover Fangys, a Hong Kong company operating in Europe, Asia, the United States and Africa, and explore its business areas.'],
    ['About Fangys | Hong Kong Company', 'Learn about FANGYS CORPORATION LIMITED, a Hong Kong company operating in Europe, Asia, the United States and Africa.'],
    ['Business Areas | Fangys', 'Explore Fangys business areas, from industry and water treatment to trade, energy, digital services and logistics.'],
    ['Contact Fangys | Business and Partnerships', 'Use the Fangys contact form to prepare a business enquiry or partnership proposal.'],
  ];
  const language = fr ? 'English' : 'Français';
  const pending = fr ? 'À venir' : 'Coming soon';
  const reserved = (label) => `<span class="reserved">${label} <small>${pending}</small></span>`;
  const socials = `<ul class="social-links" aria-label="${fr ? 'Réseaux sociaux' : 'Social media'}">${Object.entries(socialProfiles).map(([name, url]) => {
    const icon = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${socialIcons[name]}</svg>`;
    return `<li>${url ? `<a href="${url}" aria-label="${name}" title="${name}">${icon}</a>` : `<span role="img" aria-label="${name}" title="${name}">${icon}</span>`}</li>`;
  }).join('')}</ul>`;
  const groupLinks = fr ? ['Notre impact', 'Notre gouvernance', 'Éthique', 'Carrières'] : ['Our impact', 'Our governance', 'Ethics', 'Careers'];
  const legalLinks = fr ? ['CGU', 'Politique de confidentialité', 'Déclaration relative aux cookies', 'Modifier votre consentement'] : ['Terms of use', 'Privacy policy', 'Cookie statement', 'Change your consent'];
  const fields = fr ? ['Nom complet','Adresse e-mail','Organisation','Objet','Message'] : ['Full name','Email address','Organisation','Subject','Message'];
  const [name, email, organisation, subject, message] = fields;
  const photo = (id) => `<img src="../images/${id}.jpg" alt="" loading="lazy" decoding="async">`;
  const showcase = [0, 4, 7].map((index) => `<a class="sector-preview" href="${sectors}#sector-${index + 1}">${photo(sectorPhotos[index][0])}<span>${t.cards[index][0]}</span></a>`).join('');
  const portfolio = t.cards.map(([heading, text], index) => {
    const [cover, detail, captionFr, captionEn] = sectorPhotos[index];
    return `<article class="sector-card" id="sector-${index + 1}">
      <div class="sector-cover">${photo(cover)}</div>
      <div class="sector-copy"><h2>${heading}</h2><p>${text}</p>
        <figure class="sector-detail">${photo(detail)}<figcaption>${fr ? captionFr : captionEn}</figcaption></figure>
      </div>
    </article>`;
  }).join('');

  const bodies = [
    `<section class="hero"><div class="wrap"><div class="hero-copy"><h1>${t.heading}</h1><p>${t.intro}</p><div class="actions"><a class="button" href="${sectors}">${t.explore}</a><a class="button secondary" href="${group}">${t.groupAction}</a></div></div></div><p class="wrap city">${t.city}</p></section>
    <section><div class="wrap editorial"><h2>${t.aboutHeading}</h2><div><p>${t.about}</p><a href="${group}">${t.groupAction}</a></div></div></section>
    <section id="sectors"><div class="wrap"><div class="editorial"><h2>${t.sectors}</h2><div><p>${t.sectorIntro}</p><a href="${sectors}">${t.explore}</a></div></div><div class="sector-showcase">${showcase}</div></div></section>`,
    `<section class="page-intro"><div class="wrap"><h1>${t.group}</h1><p>${t.about}</p></div></section><section><div class="wrap"><h2>${t.sectors}</h2><p>${t.sectorIntro}</p><a href="${sectors}">${t.explore}</a></div></section>`,
    `<section class="page-intro"><div class="wrap"><h1>${t.sectors}</h1><p>${t.sectorIntro}</p></div></section><section><div class="wrap"><p class="photo-note">${fr ? 'Photographies d’illustration' : 'Illustrative photography'}</p><div class="sector-portfolio">${portfolio}</div></div></section>`,
    `<section class="page-intro contact-hero"><div class="wrap"><h1>${t.contact}</h1><p>${t.contactText}</p></div></section>
    <section><div class="wrap contact-layout"><div><h2>Hong Kong</h2><p>FANGYS CORPORATION LIMITED</p></div>
    <form id="enquiry" class="enquiry">
    <label>${name}<input autocomplete="name" maxlength="120" required></label>
    <label>${email}<input type="email" autocomplete="email" maxlength="254" required></label>
    <label>${organisation}<input autocomplete="organization" maxlength="160"></label>
    <label>${subject}<select required><option value="">${fr ? 'Choisir un objet' : 'Choose a subject'}</option><option>${fr ? 'Demande commerciale' : 'Business enquiry'}</option><option>${fr ? 'Partenariat' : 'Partnership'}</option><option>${fr ? 'Autre demande' : 'Other enquiry'}</option></select></label>
    <label class="wide">${message}<textarea rows="6" maxlength="4000" required></textarea></label>
    <button class="button wide" type="submit" disabled>${fr ? 'Envoyer' : 'Send'}</button>
    <p id="enquiry-status" class="wide" role="status" hidden>${fr ? 'L’envoi est indisponible. Vous pouvez copier votre message ci-dessous.' : 'Message delivery is unavailable. You can copy your message below.'}</p>
    <label id="draft" class="wide" hidden>${fr ? 'Brouillon à copier' : 'Draft to copy'}<textarea rows="7" readonly></textarea></label>
    </form></div></section>`,
  ];
  const folder = new URL(`./${lang}/`, outputDir);
  mkdirSync(folder, { recursive: true });
  for (const [index, file] of routes[lang].entries()) {
    const equivalent = `../${other}/${routes[other][index]}`;
    const canonical = publicUrl(`${lang}/${file}`);
    const alternate = publicUrl(`${other}/${routes[other][index]}`);
    const [title, description] = seo[index].map(escapeAttr);
    const shareImage = publicUrl(index === 3 ? 'images/contact-hong-kong.jpg' : 'victoria-harbour.jpg');
    const shareAlt = index === 3
      ? (fr ? 'Façade vitrée à Hong Kong' : 'Glass façade in Hong Kong')
      : 'Victoria Harbour, Hong Kong';
    const organization = siteUrl && index === 0 ? JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': publicUrl('#organization'),
      name: 'Fangys',
      legalName: 'FANGYS CORPORATION LIMITED',
      url: siteUrl.href,
      logo: publicUrl('fangys-logo.jpg'),
    }).replace(/</g, '\\u003c') : null;
    const languageLink = `<a href="${equivalent}" hreflang="${other}" lang="${other}">${language}</a>`;
    const logo = `<a href="${home}"><img class="brand" src="../fangys-logo.jpg" width="146" height="42" alt="Fangys"></a>`;
    const nav = routes[lang].map((path, i) => `<a href="${path}"${i === index ? ' aria-current="page"' : ''}>${labels[i]}</a>`).join('');
    writeFileSync(new URL(file, folder), `<!doctype html>
<html lang="${lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <link rel="icon" href="../favicon.png" type="image/png" sizes="64x64">
  <link rel="alternate" hreflang="${lang}" href="${escapeAttr(canonical ?? file)}">
  <link rel="alternate" hreflang="${other}" href="${escapeAttr(alternate ?? equivalent)}">
  <link rel="alternate" hreflang="x-default" href="${escapeAttr(publicUrl(`fr/${routes.fr[index]}`) ?? (fr ? file : equivalent))}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Fangys">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:locale" content="${fr ? 'fr_FR' : 'en_US'}">
  <meta property="og:locale:alternate" content="${fr ? 'en_US' : 'fr_FR'}">
  <meta name="twitter:card" content="${shareImage ? 'summary_large_image' : 'summary'}">${canonical ? `
  <link rel="canonical" href="${escapeAttr(canonical)}">
  <meta property="og:url" content="${escapeAttr(canonical)}">
  <meta property="og:image" content="${escapeAttr(shareImage)}">
  <meta property="og:image:alt" content="${shareAlt}">` : ''}${organization ? `
  <script type="application/ld+json">${organization}</script>` : ''}
  <link rel="stylesheet" href="../style.css">
  <script src="../interactions.js" defer></script>
</head>
<body>
  <a class="skip" href="#main">${t.skip}</a>
  <div class="company-bar"><div class="wrap"><span>FANGYS CORPORATION LIMITED · Hong Kong</span>${socials}<a href="${contact}">${fr ? 'Contacter la société' : 'Contact the company'}</a></div></div>
  <header><div class="wrap">${logo}<nav aria-label="${fr ? 'Navigation principale' : 'Main navigation'}">${nav}</nav><div class="lang">${languageLink}</div></div></header>
  <main id="main">${bodies[index]}</main>
  <footer>
    <div class="footer-tools"><div class="wrap">${socials}<button id="contrast" type="button" aria-pressed="false" hidden>${fr ? 'Contraste renforcé' : 'High contrast'}</button></div></div>
    <div class="wrap footer-grid">
      <div><h2>${fr ? 'Notre groupe' : 'Our group'}</h2><a href="${group}">${fr ? 'Qui sommes-nous' : 'Who we are'}</a>${groupLinks.map(reserved).join('')}</div>
      <div><h2>${t.sectors}</h2><a href="${sectors}">${t.explore}</a></div>
      <div><h2>${fr ? 'Informations légales' : 'Legal information'}</h2>${legalLinks.map(reserved).join('')}<span>${fr ? 'Accessibilité · évaluation à venir' : 'Accessibility · assessment pending'}</span></div>
      <div><h2>${fr ? 'Langue du site' : 'Site language'}</h2>${languageLink}</div>
    </div>
    <div class="wrap footer-brand"><span>FANGYS CORPORATION LIMITED</span>${logo}</div>
  </footer>
</body>
</html>
`);
  }
}
