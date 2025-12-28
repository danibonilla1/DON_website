// Floating preorder button visibility

document.addEventListener('DOMContentLoaded', () => {
  const floatingBtn = document.getElementById('preorderBtn');
  const heroSection = document.querySelector('.hero');
  const preorderSection = document.getElementById('preorder');
  let isPreorderSectionVisible = false;

  // --- Observer para la sección Preorder ---
  // Se activa cuando la sección 'preorder' entra o sale de la vista
  const preorderObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        // Si la sección es visible, marcamos nuestra variable como true
        isPreorderSectionVisible = entry.isIntersecting;
        // Forzamos una actualización del estado del botón
        updateButtonVisibility();
      });
    },
    { threshold: 0.1 } // Se activa cuando el 10% de la sección es visible
  );

  // Le decimos al observer que vigile la sección preorder
  preorderObserver.observe(preorderSection);


  // --- Optimization: Use IntersectionObserver instead of Scroll Listener ---
  // Create a sentinel at the bottom of the hero to detect when we pass it
  const sentinel = document.createElement('div');
  sentinel.style.position = 'absolute';
  sentinel.style.bottom = '0';
  sentinel.style.left = '0';
  sentinel.style.width = '100%';
  sentinel.style.height = '1px';
  sentinel.style.pointerEvents = 'none';
  sentinel.style.opacity = '0';
  if (heroSection) heroSection.appendChild(sentinel);

  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // If sentinel is NOT intersecting and we are below it (bounding rect top < 0), we passed hero
      // But simpler: if hero is out of view (entry.isIntersecting is false)

      // Actually, we want to know if we are PAST the hero. 
      // If bottom of hero is above viewport top.
      // Let's use the main hero observer for this.

      const isPastAndBelow = !entry.isIntersecting && entry.boundingClientRect.top < 0;

      if (isPastAndBelow && !isPreorderSectionVisible) {
        floatingBtn.classList.add('visible');
      } else {
        floatingBtn.classList.remove('visible');
      }
    });
  }, { threshold: 0 });

  if (heroSection) heroObserver.observe(heroSection); // Observe Hero itself is easier

  // We can also reuse the update logic when Preorder visibility changes
  function updateButtonState() {
    // Check if hero is out of view (we can't easily check scrollY without listener, 
    // but we can trust the observer state tracked in variables or just rely on observer callbacks)
    // Let's rely on observer callbacks updating classList directly.
  }

  // Remove old scroll listener logic
  // window.addEventListener('scroll', updateButtonVisibility, { passive: true });


  // --- El resto de tu código sigue igual ---

  // Scroll suave al hacer clic en el botón flotante
  floatingBtn.addEventListener('click', function () {
    preorderSection.scrollIntoView({
      behavior: 'smooth'
    });
  });

  // Scroll suave al hacer clic en la flecha del hero
  document.querySelector('.scroll-indicator').addEventListener('click', function () {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  });
});
