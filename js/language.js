async function fetchLanguageData(lang) {
  const response = await fetch(`locales/${lang}.json`);
  return response.json();
}

async function switchLanguage(lang) {
  localStorage.setItem('language', lang);
  const translations = await fetchLanguageData(lang);
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[key]) {
      element.innerHTML = translations[key];
    }
  });
  document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLanguage = localStorage.getItem('language') || 'en';
  switchLanguage(savedLanguage);
});
