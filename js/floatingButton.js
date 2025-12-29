// Floating preorder button visibility and language toggle

document.addEventListener('DOMContentLoaded', () => {
  const floatingBtn = document.getElementById('preorderBtn');
  const heroSection = document.querySelector('.hero');
  const preorderSection = document.getElementById('preorder');
  const langToggleBtn = document.getElementById('langToggleBtn');
  const faqSection = document.getElementById('faq');

  let isPreorderSectionVisible = false;
  let isPastFaq = false;
  let isPastHero = false;

  // --- Observer para la sección Preorder ---
  const preorderObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        isPreorderSectionVisible = entry.isIntersecting;
        updateButtonVisibility();
      });
    },
    { threshold: 0.1 }
  );

  if (preorderSection) preorderObserver.observe(preorderSection);

  // --- Observer para flip arrow when FAQ section is reached/visible ---
  const flipObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        // Flip if we are at FAQ (intersecting) OR past it (bottom < 0)
        // Basically if we are below the pricing section
        const isAtOrPastFaq = entry.isIntersecting || entry.boundingClientRect.top < 0;

        if (isAtOrPastFaq) {
          floatingBtn.classList.add('flipped');
        } else {
          floatingBtn.classList.remove('flipped');
        }
      });
    },
    { threshold: 0.1 } // Trigger as soon as 10% of FAQ is visible
  );

  if (faqSection) flipObserver.observe(faqSection);

  // --- Hero Observer for floating button visibility and language toggle ---
  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // If hero is NOT intersecting and its bottom is above viewport (top < 0), we are past it.
      const pastAndBelow = !entry.isIntersecting && entry.boundingClientRect.bottom < 0; // Check bottom instead of top for robustness
      isPastHero = pastAndBelow;

      updateButtonVisibility();
    });
  }, { threshold: 0 });

  if (heroSection) heroObserver.observe(heroSection);

  function updateButtonVisibility() {
    // Floating button visibility
    if (isPastHero && !isPreorderSectionVisible) {
      floatingBtn.classList.add('visible');
    } else {
      floatingBtn.classList.remove('visible');
    }

    // Language toggle visibility
    if (langToggleBtn) {
      if (isPastHero) {
        langToggleBtn.classList.add('hidden');
      } else {
        langToggleBtn.classList.remove('hidden');
      }
    }
  }


  // --- Click handler for floating button ---
  floatingBtn.addEventListener('click', function () {
    if (isPastFaq) {
      // If past FAQ, scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // Scroll to preorder section with offset so title and first CTA are visible
      const pricingHeader = preorderSection.querySelector('.pricing-eyebrow');
      if (pricingHeader) {
        const headerOffset = 20; // Small margin from top
        const elementPosition = pricingHeader.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } else {
        preorderSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  });

  // Scroll suave al hacer clic en la flecha del hero
  document.querySelector('.scroll-indicator').addEventListener('click', function () {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  });

  // Hero CTA button - same scroll behavior as floating button
  const heroCta = document.querySelector('.hero .cta-button');
  if (heroCta) {
    heroCta.addEventListener('click', function (e) {
      e.preventDefault();
      const pricingHeader = preorderSection.querySelector('.pricing-eyebrow');
      if (pricingHeader) {
        const headerOffset = 20;
        const elementPosition = pricingHeader.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } else {
        preorderSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  }
});

