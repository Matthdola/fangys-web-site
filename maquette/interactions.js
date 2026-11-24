const contrast = document.querySelector('#contrast');
contrast.hidden = false;
contrast.addEventListener('click', () => {
  const enabled = document.documentElement.classList.toggle('high-contrast');
  contrast.setAttribute('aria-pressed', String(enabled));
});

const form = document.querySelector('#enquiry');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const draft = form.querySelector('#draft');
    const fields = form.querySelectorAll('input, select, textarea[required]');
    const entries = Array.from(fields, (field) => {
      const label = field.closest('label').firstChild.textContent;
      return field.value.trim() ? `${label}: ${field.value.trim()}` : '';
    });
    const output = draft.querySelector('textarea');
    output.value = entries.filter(Boolean).join('\n\n');
    draft.hidden = false;
    form.querySelector('#enquiry-status').hidden = false;
    output.focus();
    output.select();
  });
  form.querySelector('button[type="submit"]').disabled = false;
}
