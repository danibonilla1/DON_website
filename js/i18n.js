document.addEventListener('DOMContentLoaded', () => {
  const lang = new URLSearchParams(window.location.search).get('lang');

  // Si el parámetro 'lang' es 'es', busca el JSON y traduce.
  if (lang === 'es') {
    fetch('js/es.json')
      .then(response => {
        // Manejo de errores por si el archivo no se encuentra
        if (!response.ok) {
          throw new Error('No se pudo cargar el archivo de traducción.');
        }
        return response.json();
      })
      .then(translations => {
        document.querySelectorAll('[data-i18n]').forEach(element => {
          const key = element.getAttribute('data-i18n');
          if (translations[key]) {
            element.innerHTML = translations[key];
          }
        });
      })
      .catch(error => {
        console.error('Error al cargar las traducciones:', error);
      });
  }
  // Si 'lang' no es 'es' o no existe, no se hace nada y la página se mantiene en inglés.
});