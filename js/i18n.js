// Simple client-side i18n loader

function getLangParam() {
  return new URLSearchParams(window.location.search).get('lang');
}

function applyTranslations(dict) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const lang = getLangParam();
  if (lang === 'en') {
    fetch('translations.json')
      .then(res => res.json())
      .then(applyTranslations)
      .catch(e => console.error('Error loading translations.json:', e));
  }
});
