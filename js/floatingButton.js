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


    // --- Listener de Scroll para la sección Hero ---
    // Este se encarga de la lógica inicial de mostrar el botón
    function updateButtonVisibility() {
      const isPastHero = window.scrollY > heroSection.offsetHeight;
      
      // El botón se muestra si hemos pasado el Hero Y la sección Preorder NO está visible
      if (isPastHero && !isPreorderSectionVisible) {
        floatingBtn.classList.add('visible');
      } else {
        floatingBtn.classList.remove('visible');
      }
    }

    // Ejecutamos la función en cada scroll
    window.addEventListener('scroll', updateButtonVisibility, { passive: true });


    // --- El resto de tu código sigue igual ---

    // Scroll suave al hacer clic en el botón flotante
    floatingBtn.addEventListener('click', function() {
      preorderSection.scrollIntoView({ 
        behavior: 'smooth' 
      });
    });

    // Scroll suave al hacer clic en la flecha del hero
    document.querySelector('.scroll-indicator').addEventListener('click', function() {
      window.scrollBy({ 
        top: window.innerHeight, 
        behavior: 'smooth' 
      });
    });
  });
