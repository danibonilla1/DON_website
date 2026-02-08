// Floating preorder button visibility and language toggle

document.addEventListener('DOMContentLoaded', () => {
  const floatingBtn = document.getElementById('preorderBtn');
  const heroSection = document.querySelector('.hero');
  const preorderSection = document.getElementById('preorder');
  const langToggleBtn = document.getElementById('langToggleBtn');

  let isPastHero = false;

  // --- Hero Observer for language toggle visibility ---
  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const pastAndBelow = !entry.isIntersecting && entry.boundingClientRect.bottom < 0;
      isPastHero = pastAndBelow;

      // Language toggle visibility
      if (langToggleBtn) {
        if (isPastHero) {
          langToggleBtn.classList.add('hidden');
        } else {
          langToggleBtn.classList.remove('hidden');
        }
      }
    });
  }, { threshold: 0 });

  if (heroSection) heroObserver.observe(heroSection);

  // --- Scroll listener for floating button (show at 50% of page) ---
  function updateFloatingButtonVisibility() {
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = scrollPosition / documentHeight;

    // Show button when scrolled past 50% of the page
    if (scrollPercentage > 0.5) {
      floatingBtn.classList.add('visible');
    } else {
      floatingBtn.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', updateFloatingButtonVisibility);
  updateFloatingButtonVisibility(); // Initial check

  // --- Click handler for floating button - always scroll to preorder ---
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

  // Hero CTA button - scroll to preorder
  const heroCta = document.querySelector('.hero .cta-button');
  if (heroCta) {
    heroCta.addEventListener('click', function (e) {
      e.preventDefault();
      preorderSection.scrollIntoView({
        behavior: 'smooth'
      });
    });
  }
});
