function initBackToTop() {
  const masthead = document.querySelector('.site-masthead');
  const topLink = document.querySelector('.back-to-top');
  if (masthead && topLink) {
    const measure = () => document.documentElement.style.setProperty('--masthead-height', `${masthead.offsetHeight}px`);
    const updateTopLink = () => { topLink.hidden = window.scrollY < Math.max(300, masthead.offsetHeight * 2); };
    measure();
    if ('ResizeObserver' in window) new ResizeObserver(measure).observe(masthead);
    else window.addEventListener('resize', measure);
    window.addEventListener('scroll', updateTopLink, { passive: true });
    topLink.addEventListener('click', (event) => {
      event.preventDefault();
      document.body.focus({ preventScroll: true });
      window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    });
    updateTopLink();
  }
}

function initNavigation() {
  const languageMenus = document.querySelectorAll('.language-menu, .nav-disclosure');
  document.addEventListener('click', (event) => {
    for (const menu of languageMenus) if (!menu.contains(event.target)) menu.open = false;
  });
  for (const menu of languageMenus) {
    menu.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menu.open) {
        event.preventDefault();
        menu.open = false;
        menu.querySelector('summary').focus();
      }
    });
  }
  const navToggle = document.querySelector('.nav-toggle');
  const mainNavigation = document.querySelector('#main-navigation');
  if (navToggle && mainNavigation) {
    const collapse = () => {
      navToggle.setAttribute('aria-expanded', 'false');
      mainNavigation.classList.remove('is-open');
      for (const item of mainNavigation.querySelectorAll('details')) item.open = false;
    };
    mainNavigation.classList.add('is-enhanced');
    navToggle.hidden = false;
    navToggle.addEventListener('click', () => {
      if (mainNavigation.classList.contains('is-open')) { collapse(); return; }
      mainNavigation.classList.add('is-open');
      navToggle.setAttribute('aria-expanded', 'true');
    });
    document.addEventListener('click', (event) => {
      if (!mainNavigation.contains(event.target) && !navToggle.contains(event.target)) collapse();
    });
    mainNavigation.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && mainNavigation.classList.contains('is-open') && !event.defaultPrevented) {
        collapse();
        navToggle.focus();
      }
    });
  }
}

function initHeroCarousel() {
  const carousel = document.querySelector('.hero-carousel');
  if (carousel) {
    const slides = Array.from(carousel.querySelectorAll('.hero-slide'));
    const controls = carousel.querySelector('.hero-controls');
    const playback = carousel.querySelector('[data-hero-playback]');
    const position = carousel.querySelector('.hero-position');
    const stage = carousel.querySelector('#hero-slides');
    const shortcutNav = document.querySelector('.sector-shortcut-nav');
    const shortcuts = Array.from(document.querySelectorAll('[data-hero-preview]'));
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
    let index = 0;
    let playing = !reducedMotion.matches;
    let timer;

    const show = (next) => {
      slides[index].hidden = true;
      index = (next + slides.length) % slides.length;
      slides[index].hidden = false;
      position.textContent = `${index + 1} / ${slides.length}`;
      shortcuts.forEach((shortcut, i) => shortcut.classList.toggle('is-current', i === index));
    };
    const schedule = () => {
      clearTimeout(timer);
      stage.setAttribute('aria-live', playing ? 'off' : 'polite');
      playback.textContent = playing ? controls.dataset.pause : controls.dataset.play;
      playback.setAttribute('aria-label', playing ? controls.dataset.pauseLabel : controls.dataset.playLabel);
      if (!playing || document.hidden || carousel.matches(':hover') || shortcutNav?.matches(':hover')) return;
      timer = setTimeout(() => { show(index + 1); schedule(); }, 3000);
    };

    for (const button of controls.querySelectorAll('[data-hero-step]')) {
      button.addEventListener('click', () => {
        playing = false;
        schedule();
        show(index + Number(button.dataset.heroStep));
      });
    }
    playback.addEventListener('click', () => { playing = !playing; schedule(); });
    carousel.addEventListener('mouseenter', schedule);
    carousel.addEventListener('mouseleave', schedule);
    if (shortcutNav) {
      shortcutNav.addEventListener('mouseleave', schedule);
      for (const [order, shortcut] of shortcuts.entries()) {
        shortcut.addEventListener('pointerenter', (event) => {
          if (event.pointerType !== 'mouse') return;
          show(order);
          schedule();
        });
      }
      show(0);
    }
    carousel.addEventListener('focusin', (event) => {
      if (stage.contains(event.target)) { playing = false; schedule(); }
    });
    document.addEventListener('visibilitychange', schedule);
    reducedMotion.addEventListener('change', (event) => {
      if (event.matches) { playing = false; schedule(); }
    });
    controls.hidden = false;
    schedule();
  }
}

function initContactForm() {
  const form = document.querySelector('#enquiry');
  if (form) {
    const subject = new URLSearchParams(location.search).get('subject');
    if (subject === 'business' || subject === 'partnership') form.elements.subject.value = subject;
    const button = form.querySelector('button[type="submit"]');
    const status = form.querySelector('#enquiry-status');
    const draft = form.querySelector('#draft');
    const emailLink = form.querySelector('#draft-email');
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      button.disabled = true;
      status.hidden = false;
      draft.hidden = true;
      emailLink.hidden = true;
      emailLink.removeAttribute('href');
      status.textContent = form.dataset.sending;
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(Object.fromEntries(new FormData(form))),
        });
        if (response.ok && (await response.json()).accepted === true) {
          status.textContent = form.dataset.sent;
          form.reset();
          return;
        }
      } catch {
        // Offer the email draft when the delivery endpoint cannot be reached.
      } finally {
        button.disabled = false;
      }
      const fields = form.querySelectorAll('input:not([name="website"]), select, textarea[required]');
      const entries = Array.from(fields, (field) => {
        const label = field.closest('label').firstChild.textContent;
        const value = field instanceof HTMLSelectElement ? field.selectedOptions[0].text : field.value.trim();
        return value ? `${label}: ${value}` : '';
      });
      const output = draft.querySelector('textarea');
      output.value = entries.filter(Boolean).join('\n\n');
      const subject = form.dataset.subject;
      if (output.value.length < 1400) {
        emailLink.href = `mailto:info@fangys.hk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(output.value)}`;
        emailLink.hidden = false;
      }
      status.textContent = form.dataset.failed;
      draft.hidden = false;
      status.focus();
    });
    button.disabled = false;
  }
}

function initScrollReveals() {
  if ('IntersectionObserver' in window && matchMedia('(prefers-reduced-motion: no-preference)').matches) {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.12 });
    document.querySelectorAll('.legal-block, .sector-card, .about-editorial figure, .contact-layout').forEach((item) => observer.observe(item));
  }
}

initBackToTop();
initNavigation();
initHeroCarousel();
initContactForm();
initScrollReveals();
