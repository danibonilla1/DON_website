// Donate and phone modal helpers

/* --------- variables globales --------- */
let currentPaymentMethod = '';
let phoneToReveal = '';       // número que enseñaremos tras la verificación

/* ---------- DONATE MODAL ---------- */
function openDonateModal() {
  const modal = document.getElementById('donateModal');
  if (modal) modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeDonateModal() {
  const modal = document.getElementById('donateModal');
  if (modal) modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

/* ---------- PHONE MODAL ---------- */
function openPhoneModal() {
  const modal = document.getElementById('phoneModal');
  if (modal) modal.style.display = 'block';
}

function closePhoneModal() {
  const modal = document.getElementById('phoneModal');
  if (modal) modal.style.display = 'none';
  resetPhoneModal();
}

function resetPhoneModal() {
  const input = document.getElementById('phoneInput');
  const error = document.getElementById('phoneError');
  const form = document.getElementById('phoneForm');
  const display = document.getElementById('phoneDisplay');
  const title = document.getElementById('phoneModalTitle');

  if (input) input.value = '';
  if (error) error.style.display = 'none';
  if (form) form.style.display = 'block';
  if (display) display.style.display = 'none';
  if (title) {
    if (window.currentLanguage === 'es' && window.translations) {
      title.textContent = window.translations['modal.phone.title.default'] || 'Protección de Privacidad';
    } else {
      title.textContent = 'Privacy Protection';
    }
  }
}

/* ---------------- flujo principal ---------------- */
//  Llamado desde las tarjetas: requestPhoneNumber('twint', '+41 772770797')
function requestPhoneNumber(method, phone) {
  currentPaymentMethod = method;
  phoneToReveal = phone;

  // Cambiamos el título para más claridad
  const title = document.getElementById('phoneModalTitle');
  if (title) {
    if (window.currentLanguage === 'es' && window.translations) {
      const format = window.translations['modal.phone.title.unlock'] || 'Desbloquear número de';
      title.textContent = `${format} ${method.charAt(0).toUpperCase() + method.slice(1)}`;
    } else {
      title.textContent = `Unlock ${method.charAt(0).toUpperCase() + method.slice(1)} Number`;
    }
  }

  resetPhoneModal();
  openPhoneModal();
}

function confirmPhone() {
  const input = document.getElementById('phoneInput');
  const error = document.getElementById('phoneError');
  const form = document.getElementById('phoneForm');
  const display = document.getElementById('phoneDisplay');
  const number = document.getElementById('phoneNumber');

  if (!input) return;

  const rawValue = input.value.trim();
  if (!isValidPhone(rawValue)) {
    if (error) error.style.display = 'block';
    return;
  }
  if (error) error.style.display = 'none';

  // Guardar (o enviar al servidor, simulado aquí)
  savePhoneToServer(rawValue, currentPaymentMethod);

  // Mostrar el número solicitado
  if (number) number.textContent = phoneToReveal;
  if (form) form.style.display = 'none';
  if (display) display.style.display = 'block';
}

/* ---------------- helpers ---------------- */
function isValidPhone(str) {
  // Quitamos espacios, guiones y paréntesis para comprobar longitud y dígitos
  const digitsOnly = str.replace(/[\s\-()\u00A0]+/g, '');
  return /^\+?\d{7,15}$/.test(digitsOnly);
}

function savePhoneToServer(userPhone, method) {
  fetch('save-phone.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      phone: userPhone,
      paymentMethod: method
    })
  })
    .then(r => r.ok ? console.log('saved') : console.error('server error'))
    .catch(console.error);
}

/* ---- cerrar modales con clic fuera o Esc ---- */
window.addEventListener('click', (e) => {
  if (e.target === document.getElementById('donateModal')) closeDonateModal();
  if (e.target === document.getElementById('phoneModal')) closePhoneModal();
  if (e.target === document.getElementById('heroVideoModal')) closeHeroVideoModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeDonateModal();
    closePhoneModal();
    closeHeroVideoModal();
  }
});

/* ---------- HERO VIDEO TOGGLE (pantalla completa en el hero) ---------- */
let heroVideoActivationScrollY = 0;
let lastScrollY = 0;
function toggleHeroVideo(on) {
  const heroContent = document.querySelector('.hero-content');
  const heroOverlay = document.querySelector('.hero-overlay');
  const bgIframe = document.getElementById('heroBgVideo');
  const hero = document.querySelector('.hero');
  const heroActions = document.querySelector('.hero-actions');
  const body = document.body;
  const isMobile = window.innerWidth <= 768;

  if (on) {
    if (hero) hero.classList.add('video-on');
    if (body) body.classList.add('video-on');

    if (bgIframe) {
      if (isMobile) {
        // En móvil, usar parámetros optimizados para reproducción vertical
        const base = 'https://www.youtube.com/embed/Q4xYacSy2i4';
        bgIframe.src = `${base}?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1&loop=0&enablejsapi=1&playsinline=1&iv_load_policy=3&origin=${window.location.origin}`;

        // No forzar pantalla completa en móvil, dejar que se adapte naturalmente
        console.log('Modo móvil activado - video optimizado para pantalla vertical');
      } else {
        // En desktop, reproducción normal
        const base = 'https://www.youtube.com/embed/Q4xYacSy2i4';
        bgIframe.src = `${base}?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1&loop=0&enablejsapi=1`;
      }
    }

    document.body.style.overflow = 'auto';
    heroVideoActivationScrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
    lastScrollY = heroVideoActivationScrollY;
  } else {
    if (hero) hero.classList.remove('video-on');
    if (body) body.classList.remove('video-on');

    // Salir de pantalla completa si está activa
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => { });
    }

    if (bgIframe) {
      // Volver a modo de fondo (mute, loop, sin controles)
      const base = 'https://www.youtube.com/embed/Q4xYacSy2i4';
      bgIframe.src = `${base}?autoplay=1&mute=1&loop=1&playlist=Q4xYacSy2i4&controls=0&showinfo=0&modestbranding=1&iv_load_policy=3&rel=0&enablejsapi=1`;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('heroPlayBtn');
  const tapArea = document.getElementById('heroVideoToggle');
  if (btn) {
    let isOn = false;
    btn.addEventListener('click', () => {
      isOn = !isOn;
      toggleHeroVideo(isOn);
    });
  }
  if (tapArea) {
    tapArea.addEventListener('click', () => {
      // Si estamos en modo video, desactivar. Si no, activar.
      const isOn = document.body.classList.contains('video-on');
      toggleHeroVideo(!isOn);
    });
  }

  // Pausar al hacer scroll fuera del hero o al desplazarse hacia abajo
  window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    const rect = hero.getBoundingClientRect();
    const inView = rect.bottom > 0 && rect.top < window.innerHeight;
    const currentY = window.pageYOffset || document.documentElement.scrollTop || 0;
    const scrolledDown = currentY > lastScrollY + 2;
    lastScrollY = currentY;
    if (document.body.classList.contains('video-on')) {
      if (!inView) {
        toggleHeroVideo(false);
      } else if (currentY > heroVideoActivationScrollY + 10 && scrolledDown) {
        toggleHeroVideo(false);
      }
    }
  }, { passive: true });

  // Detectar cuando el usuario sale de pantalla completa
  document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement && document.body.classList.contains('video-on')) {
      // Si salió de pantalla completa, desactivar modo video
      toggleHeroVideo(false);
    }
  });
});

/* ---------- HERO VIDEO LAZY LOAD ---------- */
window.addEventListener('load', () => {
  const heroIframe = document.getElementById('heroBgVideo');
  if (heroIframe && heroIframe.dataset.src) {
    heroIframe.src = heroIframe.dataset.src;
  }
});
