import { pages, featured, routes, legal, sectorPhotos, priorityIcons, socialProfiles, socialIcons } from './site-content.mjs';
import { languageNames, ogLocales, translate, businesses } from './locales.mjs';

const escapeAttr = (text) => text.replace(/[&"<>]/g, (char) => ({
  '&': '&amp;', '"': '&quot;', '<': '&lt;', '>': '&gt;',
})[char]);

export function* renderPages(siteUrl = null) {
  const baseUrl = siteUrl ? new URL(siteUrl) : null;
  for (const [lang, content] of Object.entries(pages)) yield* renderLocale(lang, content, baseUrl);
}

function* renderLocale(lang, t, siteUrl) {
  const publicUrl = (path) => siteUrl ? new URL(path, siteUrl).href : null;
  const fr = lang === 'fr';
  const tr = (key) => translate(lang, key);
  const [home, group, sectors, contact] = routes[lang];
  const labels = [fr ? 'Accueil' : tr('Home'), t.group, t.sectors, t.contact];
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
  const activeProfiles = Object.entries(socialProfiles).filter(([, url]) => url);
  const socials = activeProfiles.length ? `<ul class="social-links" aria-label="${fr ? 'Réseaux sociaux' : tr('Social media')}">${activeProfiles.map(([name, url]) => {
    const icon = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${socialIcons[name]}</svg>`;
    return `<li>${url ? `<a href="${url}" aria-label="${name}" title="${name}">${icon}</a>` : `<span role="img" aria-label="${name}" title="${name}">${icon}</span>`}</li>`;
  }).join('')}</ul>` : '';
  const legalLinks = legal[lang].map(([file, label]) => `<a href="${file}">${label}</a>`).join('');
  const fields = fr ? ['Nom complet','Adresse e-mail','Organisation','Objet','Message'] : ['Full name','Email address','Organisation','Subject','Message'].map(tr);
  const [name, email, organisation, subject, message] = fields;
  const photo = (id, eager = false) => {
    const path = `images/${id}.jpg`;
    const src = publicUrl(path) ?? `../${path}`;
    return `<img src="${escapeAttr(src)}" alt=""${eager ? '' : ' loading="lazy"'} decoding="async">`;
  };
  const featuredLinks = new Map(featured[lang].map(([file, index]) => [index, file]));
  const priorities = [2, 8, 0, 3, 9];
  const [businessHeading, businessIntro] = {
    en: ['Our Businesses', 'Across health, water, energy and related services, Fangys focuses on activities that help meet essential needs.'],
    fr: ['Nos activités', 'De la santé à l’eau, en passant par l’énergie et les services associés, Fangys se concentre sur des activités qui contribuent à répondre aux besoins essentiels.'],
    'zh-Hans': ['我们的业务', '从医疗健康、水处理到能源及相关服务，Fangys 专注于帮助满足基本需求的业务。'],
    ar: ['أعمالنا', 'من الصحة والمياه إلى الطاقة والخدمات المرتبطة بها، تركز فانغيس على أنشطة تسهم في تلبية الاحتياجات الأساسية.'],
    es: ['Nuestras actividades', 'Desde la salud y el agua hasta la energía y los servicios relacionados, Fangys se centra en actividades que ayudan a cubrir necesidades esenciales.'],
    de: ['Unsere Geschäftsbereiche', 'Von Gesundheit und Wasser bis zu Energie und zugehörigen Dienstleistungen konzentriert sich Fangys auf Bereiche, die zur Deckung grundlegender Bedürfnisse beitragen.'],
  }[lang];
  const heroSlides = priorities.map((index, order) => {
    const [heading, description] = t.cards[index];
    return `<article class="hero-slide" id="hero-slide-${order + 1}" aria-label="${heading}"${order ? ' hidden' : ''}>
      ${photo(sectorPhotos[index][0], order === 0)}
      <div class="wrap hero-slide-inner"><div class="hero-copy"><h2>${heading}</h2><p>${description}</p>
      <a class="button" href="${featuredLinks.get(index)}">${fr ? 'Découvrir cette activité' : tr('Explore this area')}</a></div></div>
    </article>`;
  }).join('');
  const heroControls = `<div class="hero-controls" data-pause="${escapeAttr(fr ? 'Pause' : tr('Pause'))}" data-play="${escapeAttr(fr ? 'Reprendre' : tr('Play'))}" data-pause-label="${escapeAttr(fr ? 'Mettre le défilement en pause' : tr('Pause slideshow'))}" data-play-label="${escapeAttr(fr ? 'Reprendre le défilement' : tr('Play slideshow'))}" hidden>
    <button class="hero-arrow hero-arrow-prev" type="button" data-hero-step="-1" aria-controls="hero-slides" aria-label="${fr ? 'Diapositive précédente' : tr('Previous slide')}"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 4-8 8 8 8"/></svg></button>
    <button class="hero-arrow hero-arrow-next" type="button" data-hero-step="1" aria-controls="hero-slides" aria-label="${fr ? 'Diapositive suivante' : tr('Next slide')}"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 4 8 8-8 8"/></svg></button>
    <div class="wrap hero-status"><span class="hero-position" aria-live="off">1 / ${priorities.length}</span>
    <button type="button" data-hero-playback aria-controls="hero-slides">Pause</button></div>
  </div>`;
  const showcase = priorities.map((index) => {
    const [heading, description] = t.cards[index];
    return `<li><a class="business-panel" data-sector="${index}" href="${featuredLinks.get(index)}">${photo(sectorPhotos[index][0])}<div class="business-panel-copy"><h3>${heading}</h3><div class="business-panel-reveal"><div><p>${description}</p><span>${fr ? 'Découvrir' : tr('Explore')}</span></div></div></div></a></li>`;
  }).join('');
  const shortcuts = priorities.map((index, order) => `<li><a class="sector-shortcut" data-hero-preview="${order}" href="${featuredLinks.get(index)}">
    <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${priorityIcons[index]}</svg><span>${t.cards[index][0]}</span>
  </a></li>`).join('');
  const discuss = fr ? 'Parlons de votre projet' : tr('Discuss a project');
  const contactBand = (legalPage) => {
    const heading = legalPage ? (fr ? 'Une question ?' : tr('Have a question?')) : discuss;
    const prompt = legalPage
      ? (fr ? 'Contactez FANGYS pour toute question sur le site.' : tr('Contact FANGYS with any questions about this website.'))
      : (fr ? 'Une demande commerciale ou une proposition de partenariat ?' : tr('Have a business enquiry or a partnership proposal?'));
    return `<section class="home-enquiry"><div class="wrap editorial"><h2>${heading}</h2><div><p>${prompt}</p><a class="button" href="${contact}">${t.contact}</a></div></div></section>`;
  };
  const portfolio = t.cards.map(([heading, text], index) => {
    const [cover, detail, captionFr, captionEn] = sectorPhotos[index];
    return `<article class="sector-card" id="sector-${index + 1}">
      <div class="sector-cover">${photo(cover, index < 2)}</div>
      <div class="sector-copy"><h2>${heading}</h2><p>${text}</p>${featuredLinks.has(index) ? `<a href="${featuredLinks.get(index)}">${fr ? 'En savoir plus' : tr('Learn more')}</a>` : ''}
        ${detail ? `<figure class="sector-detail">${photo(detail)}<figcaption>${fr ? captionFr : tr(captionEn)}</figcaption></figure>` : ''}
      </div>
    </article>`;
  }).join('');

  const bodies = [
    `<section class="hero hero-carousel" aria-labelledby="homepage-title">
    <div class="wrap hero-heading"><h1 id="homepage-title">FANGYS</h1><span>${t.heading}</span></div>
    ${heroControls}<div id="hero-slides" aria-live="off">${heroSlides}</div></section>
    <nav class="wrap sector-shortcut-nav" aria-label="${fr ? 'Domaines prioritaires' : tr('Priority areas')}"><ul>${shortcuts}</ul></nav>
    <section id="sectors" aria-labelledby="sector-heading"><div class="business-intro"><div class="wrap"><h2 id="sector-heading">${businessHeading}</h2><p>${businessIntro}</p></div></div>
    <ul class="business-gallery">${showcase}</ul></section>
    <section><div class="wrap editorial"><h2>${t.group}</h2><div><p>${fr ? 'FANGYS CORPORATION LIMITED est enregistrée à Hong Kong. Découvrez le groupe et les métiers qui composent son portefeuille.' : tr('FANGYS CORPORATION LIMITED is registered in Hong Kong. Learn about the group and the business areas in its portfolio.')}</p><a href="${group}">${t.groupAction}</a></div></div></section>`,
    `<section class="page-intro group-hero"><div class="wrap"><h1>${t.group}</h1><p>${t.about}</p></div></section>
    <section><div class="wrap about-editorial">
      <figure><img src="../victoria-harbour.jpg" width="1440" height="792" alt="${fr ? 'Vue nocturne des gratte-ciel de Hong Kong depuis Victoria Harbour' : tr('Hong Kong’s skyline at night across Victoria Harbour')}" decoding="async"><figcaption>Victoria Harbour, Hong Kong</figcaption></figure>
      <div><h2>${t.sectors}</h2><p>${t.sectorIntro}</p><a href="${sectors}">${t.explore}</a></div>
    </div></section>`,
    `<section class="page-intro sectors-hero"><div class="wrap"><h1>${t.sectors}</h1><p>${t.sectorIntro}</p></div></section><section><div class="wrap"><p class="photo-note">${fr ? 'Photographies d’illustration' : tr('Illustrative photography')}</p><div class="sector-portfolio">${portfolio}</div></div></section>`,
    `<section class="page-intro contact-hero"><div class="wrap"><h1>${t.contact}</h1><p>${t.contactText}</p></div></section>
    <section><div class="wrap contact-layout"><div><h2>Hong Kong</h2><p>FANGYS CORPORATION LIMITED</p><a href="mailto:info@fangys.hk">info@fangys.hk</a></div>
    <form id="enquiry" class="enquiry" method="post" data-sending="${escapeAttr(fr ? 'Envoi en cours…' : tr('Sending…'))}" data-sent="${escapeAttr(fr ? 'Votre message a été transmis.' : tr('Your message has been sent.'))}" data-subject="${escapeAttr(fr ? 'Demande depuis fangys.hk' : tr('Enquiry from fangys.hk'))}" data-failed="${escapeAttr(fr ? 'Le message n’a pas été envoyé. Vous pouvez envoyer le brouillon par e-mail à info@fangys.hk.' : tr('The message was not sent. You can email the draft to info@fangys.hk.'))}">
    <label>${name}<input name="name" autocomplete="name" maxlength="120" required></label>
    <label>${email}<input name="email" type="email" autocomplete="email" maxlength="254" required></label>
    <label>${organisation}<input name="organisation" autocomplete="organization" maxlength="160"></label>
    <label>${subject}<select name="subject" required><option value="">${fr ? 'Choisir un objet' : tr('Choose a subject')}</option><option value="business">${fr ? 'Demande commerciale' : tr('Business enquiry')}</option><option value="partnership">${fr ? 'Partenariat' : tr('Partnership')}</option><option value="other">${fr ? 'Autre demande' : tr('Other enquiry')}</option></select></label>
    <label class="wide">${message}<textarea name="message" rows="6" maxlength="4000" required></textarea></label>
    <label hidden>${tr('Website')}<input name="website" autocomplete="off" tabindex="-1"></label>
    <p class="wide form-note"><a href="${legal[lang][2][0]}">${legal[lang][2][1]}</a></p>
    <button class="button wide" type="submit" disabled>${fr ? 'Envoyer' : tr('Send')}</button>
    <p id="enquiry-status" class="wide" role="status" tabindex="-1" hidden></p>
    <a id="draft-email" class="wide" hidden>${fr ? 'Ouvrir le brouillon dans votre messagerie' : tr('Open the draft in your email app')}</a>
    <label id="draft" class="wide" hidden>${fr ? 'Brouillon à copier' : tr('Draft to copy')}<textarea rows="7" readonly></textarea></label>
    </form></div></section>`,
  ];
  for (const [index, file] of routes[lang].entries()) {
    const canonical = publicUrl(`${lang}/${file}`);
    const legalPage = legal[lang][index - labels.length];
    const feature = featured[lang].find(([path]) => path === file);
    const localizedSeo = [[`Fangys | ${t.heading}`, t.about], [`${t.group} | Fangys`, t.about], [`${t.sectors} | Fangys`, t.sectorIntro], [`${t.contact} | Fangys`, t.contactText]];
    const [title, description] = (feature ? [`${feature[2]} | Fangys`, feature[3]] : legalPage ? [`${legalPage[1]} | Fangys`, legalPage[2]] : (businesses[lang] ? localizedSeo : seo)[index]).map(escapeAttr);
    const body = feature
      ? `<section class="page-intro feature-hero feature-${feature[1]}"><div class="wrap"><a href="${sectors}">${t.sectors}</a><h1>${feature[2]}</h1></div></section><section><div class="wrap about-editorial"><figure>${photo(sectorPhotos[feature[1]][0], true)}<figcaption>${fr ? 'Photographie d’illustration' : tr('Illustrative photograph')}</figcaption></figure><div><h2>${fr ? 'Présentation' : tr('Overview')}</h2><p>${feature[3]}</p><a class="button" href="${contact}?subject=${feature[1] === 8 ? 'partnership' : 'business'}#enquiry">${feature[1] === 8 ? (fr ? 'Proposer un partenariat' : tr('Propose a partnership')) : discuss}</a></div></div></section>`
      : legalPage
      ? `<section class="page-intro legal-hero"><div class="wrap"><h1>${legalPage[1]}</h1><p>${legalPage[2]}</p></div></section>
        <section><div class="wrap legal-layout">
        <nav class="legal-nav" aria-label="${fr ? 'Sur cette page' : tr('On this page')}"><strong>${fr ? 'Sur cette page' : tr('On this page')}</strong><ol>${legalPage[3].map(([heading], i) => `<li><a href="#section-${i + 1}">${heading}</a></li>`).join('')}</ol></nav>
        <div class="legal-copy">${legalPage[3].map(([heading, text], i) => `<article class="legal-block" id="section-${i + 1}"><h2>${heading}</h2><p>${text}</p></article>`).join('')}
        <div class="legal-contact"><h2>${fr ? 'Une question ?' : tr('Have a question?')}</h2><a href="mailto:info@fangys.hk">info@fangys.hk</a></div></div></div></section>`
      : bodies[index];
    const shareImage = publicUrl(index === 3 ? 'images/contact-workspace.jpg' : 'victoria-harbour.jpg');
    const shareAlt = index === 3
      ? (fr ? 'Espace de travail avec ordinateur et téléphone' : tr('Workspace with a laptop and phone'))
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
    const flags = {
      en: '<rect width="30" height="18" fill="#fff"/><path d="M15 0v18M0 9h30" stroke="#ce1126" stroke-width="4"/>',
      fr: '<rect width="30" height="18" fill="#fff"/><path d="M0 0h10v18H0z" fill="#002395"/><path d="M20 0h10v18H20z" fill="#ed2939"/>',
      'zh-Hans': '<rect width="30" height="18" fill="#de2910"/><path fill="#ffde00" d="m6 3 1 2.4h2.5l-2 1.5.8 2.4L6 7.8 3.7 9.3l.8-2.4-2-1.5H5z"/>',
      ar: '<rect width="30" height="18" fill="#12243a"/><g stroke="#fff" stroke-width=".8" fill="none"><circle cx="15" cy="9" r="6"/><ellipse cx="15" cy="9" rx="2.6" ry="6"/><path d="M9 9h12"/></g>',
      es: '<rect width="30" height="18" fill="#aa151b"/><path d="M0 5h30v8H0z" fill="#f1bf00"/>',
      de: '<rect width="30" height="18"/><path d="M0 6h30v6H0z" fill="#d00"/><path d="M0 12h30v6H0z" fill="#ffce00"/>',
    };
    const flagIcon = (locale) => `<svg class="language-flag" viewBox="0 0 30 18" width="24" height="14" aria-hidden="true" focusable="false">${flags[locale]}</svg>`;
    const currentLanguage = languageNames[lang];
    const localeHref = (locale) => `../${locale}/${routes[locale][index]}`;
    const languageLink = `<details class="language-menu">
      <summary>${flagIcon(lang)}${currentLanguage}<svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m4 6 4 4 4-4"/></svg></summary>
      <ul>${Object.entries(languageNames).map(([locale, label]) => `<li>${lang === locale
        ? `<span class="language-option" lang="${locale}" aria-current="true">${flagIcon(locale)}${label}<span aria-hidden="true">✓</span></span>`
        : `<a class="language-option" href="${localeHref(locale)}" hreflang="${locale}" lang="${locale}">${flagIcon(locale)}${label}</a>`}</li>`).join('')}</ul>
    </details>`;
    const logo = `<a href="${home}"><img class="brand" src="../fangys-logo.jpg" width="146" height="42" alt="Fangys"></a>`;
    const current = (path) => path === file ? ' aria-current="page"' : '';
    const navLink = (path, label, extra = '') => `<a href="${path}"${current(path)}${extra}>${label}</a>`;
    const caret = '<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m4 6 4 4 4-4"/></svg>';
    const sectorItems = [2, 0, 3, 9, 1, 4, 5, 6, 7].map((id) => {
      const path = featuredLinks.get(id) ?? `${sectors}#sector-${id + 1}`;
      return `<li>${navLink(path, t.cards[id][0])}</li>`;
    }).join('');
    const sections = {
      en: ['Partnerships', 'Menu', 'All business areas'],
      fr: ['Partenariats', 'Menu', 'Tous les secteurs'],
      'zh-Hans': ['合作伙伴关系', '菜单', '全部业务领域'],
      ar: ['الشراكات', 'القائمة', 'جميع مجالات الأعمال'],
      es: ['Colaboraciones', 'Menú', 'Todas las áreas de negocio'],
      de: ['Partnerschaften', 'Menü', 'Alle Geschäftsbereiche'],
    };
    const [partnerships, menuLabel, allBusinesses] = sections[lang];
    const nav = `
      ${navLink(home, labels[0])}
      <details class="nav-disclosure nav-businesses"><summary${file === sectors || (feature && feature[1] !== 8) ? ' class="is-active"' : ''}>${t.sectors}${caret}</summary>
        <div class="nav-panel"><ul>${sectorItems}</ul>${navLink(sectors, allBusinesses, ' class="nav-all"')}</div>
      </details>
      <details class="nav-disclosure"><summary${file === group ? ' class="is-active"' : ''}>${t.group}${caret}</summary>
        <div class="nav-panel"><ul><li>${navLink(group, fr ? 'Qui sommes-nous' : tr('Who we are'))}</li>
          <li>${navLink(legal[lang][0][0], legal[lang][0][1])}</li><li>${navLink(legal[lang][4][0], legal[lang][4][1])}</li></ul></div>
      </details>
      ${navLink(featuredLinks.get(8), t.cards[8][0])}
      ${navLink(`${contact}?subject=partnership#enquiry`, partnerships)}
      ${navLink(contact, t.contact, ' class="nav-contact"')}`;
    yield { path: `${lang}/${file}`, html: `<!doctype html>
<html lang="${lang}" dir="${lang === 'ar' ? 'rtl' : 'ltr'}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <link rel="icon" href="../favicon.png" type="image/png" sizes="64x64">
  ${Object.keys(languageNames).map((locale) => `<link rel="alternate" hreflang="${locale}" href="${escapeAttr(publicUrl(`${locale}/${routes[locale][index]}`) ?? localeHref(locale))}">`).join('\n  ')}
  <link rel="alternate" hreflang="x-default" href="${escapeAttr(publicUrl(`en/${routes.en[index]}`) ?? localeHref('en'))}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Fangys">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:locale" content="${ogLocales[lang]}">
  ${Object.entries(ogLocales).filter(([locale]) => locale !== lang).map(([, value]) => `<meta property="og:locale:alternate" content="${value}">`).join('\n  ')}
  <meta name="twitter:card" content="${shareImage ? 'summary_large_image' : 'summary'}">${canonical ? `
  <link rel="canonical" href="${escapeAttr(canonical)}">
  <meta property="og:url" content="${escapeAttr(canonical)}">
  <meta property="og:image" content="${escapeAttr(shareImage)}">
  <meta property="og:image:alt" content="${shareAlt}">` : ''}${organization ? `
  <script type="application/ld+json">${organization}</script>` : ''}
  <link rel="stylesheet" href="../style.css">
  <script src="../interactions.js" defer></script>
</head>
<body id="top" tabindex="-1">
  <a class="skip" href="#main">${t.skip}</a>
  <div class="site-masthead">
    <div class="company-bar"><div class="wrap"><span>FANGYS CORPORATION LIMITED · Hong Kong</span></div></div>
    <header><div class="wrap">${logo}<button type="button" class="nav-toggle" aria-expanded="false" aria-controls="main-navigation" hidden>${menuLabel}</button><nav id="main-navigation" class="main-navigation" aria-label="${fr ? 'Navigation principale' : tr('Main navigation')}">${nav}</nav><div class="lang">${languageLink}</div></div></header>
  </div>
  <main id="main">${body}${file === contact ? '' : contactBand(legalPage)}</main>
  <footer>
    <div class="wrap footer-grid">
      <div><h2>${fr ? 'Notre groupe' : tr('Our group')}</h2>${navLink(group, fr ? 'Qui sommes-nous' : tr('Who we are'))}${navLink(featuredLinks.get(8), t.cards[8][0])}</div>
      <div><h2>${t.sectors}</h2>${[2, 0, 3, 9].map((id) => navLink(featuredLinks.get(id), t.cards[id][0])).join('')}${navLink(sectors, allBusinesses)}</div>
      <div><h2>${t.contact}</h2>${navLink(contact, discuss)}${navLink(`${contact}?subject=partnership#enquiry`, partnerships)}<a href="mailto:info@fangys.hk">info@fangys.hk</a>${socials}</div>
      <div><h2>${fr ? 'Informations légales' : tr('Legal information')}</h2>${legalLinks}</div>
    </div>
    <div class="wrap footer-brand"><span>FANGYS CORPORATION LIMITED</span>${languageLink}<a class="footer-logo-link" href="${home}" aria-label="Fangys"><span class="footer-logo" aria-hidden="true"></span></a></div>
  </footer>
  <a class="back-to-top" href="#top" aria-label="${fr ? 'Retour en haut de la page' : tr('Back to top')}" title="${fr ? 'Retour en haut de la page' : tr('Back to top')}" hidden><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 12 6-6 6 6M12 6v13"/></svg></a>
</body>
</html>
` };
  }
}
