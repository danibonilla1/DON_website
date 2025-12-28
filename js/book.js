// Book section scroll logic - Direct Interpolation (No Lag)

let currentProgress = 0;

// Map range function
const mapRange = (value, inMin, inMax, outMin, outMax) => {
  const clamped = Math.min(Math.max(value, inMin), inMax);
  return outMin + (outMax - outMin) * ((clamped - inMin) / (inMax - inMin));
};

// Cache metrics to avoid layout thrashing
let metrics = {
  sectionTop: 0,
  sectionHeight: 0,
  windowHeight: 0,
  totalDistance: 0
};

function cacheMetrics() {
  const bookSection = document.querySelector('.book-section');
  if (!bookSection) return;

  // Calculate absolute position including scroll
  const rect = bookSection.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  metrics.sectionTop = rect.top + scrollTop;
  metrics.sectionHeight = bookSection.offsetHeight;
  metrics.windowHeight = window.innerHeight;
  metrics.totalDistance = metrics.sectionHeight + metrics.windowHeight;
}

function updateBookAnimation() {
  const bookSection = document.querySelector('.book-section');
  const bookContainer = document.querySelector('.book-container');
  const book = document.getElementById('book');
  const coverOuter = document.querySelector('.book-cover-outer');
  const coverInner = document.querySelector('.book-cover-inner');

  if (!bookSection || !bookContainer || !book) {
    requestAnimationFrame(updateBookAnimation);
    return;
  }

  // Detect Mobile
  const isMobile = window.innerWidth < 768;

  let targetProgress = 0;

  if (isMobile) {
    // ---------------- MOBILE LOGIC (No Sticky) ----------------
    // Animación basada en cuánto hemos scrolleado desde el top (Hero)
    // Como el libro está superpuesto al Hero (transform -90vh),
    // queremos que se anime mientras el usuario scrollea el Hero.

    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;

    // El libro empieza visible. Queremos que progrese de 0 (cerrado) a 1 (abierto/rotado)
    // mientras el usuario hace scroll hacia abajo para ver el resto de la página.
    // Completamos la animación cuando hemos scrolleado el 80% de la pantalla (el libro ya casi sale)
    // Ajustamos esto para que se sienta bien.

    targetProgress = scrollY / (windowHeight * 0.7);

    // Clamp to 0-1
    targetProgress = Math.min(Math.max(targetProgress, 0), 1);

    // Curva de aceleración para móvil (más rápido al principio)
    targetProgress = Math.pow(targetProgress, 0.9);

  } else {
    // ---------------- DESKTOP LOGIC (Sticky) ----------------
    // Ensure metrics are initialized
    if (metrics.totalDistance === 0) {
      cacheMetrics();
    }

    // Use cached metrics + current scroll
    const sectionTop = bookSection.offsetTop;
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    const startScroll = metrics.sectionTop - metrics.windowHeight;
    const currentPos = scrollY - startScroll;

    if (metrics.totalDistance > 0) {
      targetProgress = currentPos / metrics.totalDistance;
    }
    targetProgress = Math.min(Math.max(targetProgress, 0), 1);
  }

  // ---------------- SMOOTHING (LERP) ----------------
  // En móvil queremos respuesta casi inmediata pero suavizada para evitar "tembleque"
  const lerpFactor = isMobile ? 0.3 : 0.1;

  if (Math.abs(targetProgress - currentProgress) < 0.0005) {
    currentProgress = targetProgress;
  } else {
    currentProgress += (targetProgress - currentProgress) * lerpFactor;
  }

  const progress = currentProgress;

  // ---------------- VISIBILITY ----------------
  // En móvil siempre visible por CSS !important, pero mantenemos lógica class
  const isVisible = isMobile ? true : (progress > -0.1 && progress < 1.1);

  if (isVisible) {
    bookContainer.classList.add('visible');
  } else {
    bookContainer.classList.remove('visible');
  }

  // ---------------- ANIMATION PHASES ----------------
  let translateY, translateX, rotateY, rotateX, scale, coverRotation;

  if (isMobile) {
    // --- MOBILE ANIMATION (Simplified) ---
    // Solo abrir y rotar un poco, sin trasladarse demasiado (el scroll lo mueve)

    // Empieza: Ligeramente de lado + Cerrado
    // Termina: Más de frente + Abierto

    // RotateY: -25 (inicio) -> -5 (fin)
    rotateY = -25 + (progress * 20);

    // RotateX: 8 (inicio) -> 15 (fin)
    rotateX = 8 + (progress * 7);

    // Scale: 0.65 (inicio) -> 0.75 (fin)
    scale = 0.65 + (progress * 0.1);

    // Cover: 0 (cerrado) -> -160 (abierto)
    // Empieza a abrirse pronto
    const openP = Math.min(Math.max((progress - 0.1) * 1.4, 0), 1);
    coverRotation = openP * -160;

    // Translate: Mantener centrado
    translateX = 0;
    translateY = 0;

  } else {
    // --- DESKTOP ANIMATION (Original Complex) ---
    if (progress < 0.5) {
      // SCROLL 1: SHOW STRAIGHT + TILT + OPEN
      const p = mapRange(progress, 0, 0.5, 0, 1);
      translateY = mapRange(p, 0, 1, 80, -10);
      translateX = 0;
      rotateY = mapRange(p, 0, 1, 0, -20);
      rotateX = mapRange(p, 0, 1, 0, 10);
      scale = mapRange(p, 0, 1, 0.6, 0.85);
      coverRotation = mapRange(p, 0, 1, 0, -120);
    } else if (progress < 0.75) {
      // SCROLL 2: FLIP
      const p = mapRange(progress, 0.5, 0.75, 0, 1);
      translateY = -10;
      translateX = mapRange(p, 0, 1, 0, -150);
      rotateY = mapRange(p, 0, 1, -20, -180);
      rotateX = mapRange(p, 0, 1, 10, 0);
      scale = 0.85;
      coverRotation = mapRange(p, 0, 1, -120, -180);
    } else {
      // SCROLL 3: ROTATE
      const p = mapRange(progress, 0.75, 1.0, 0, 1);
      translateY = -10;
      translateX = -150;
      rotateY = mapRange(p, 0, 1, -180, -200);
      rotateX = 0;
      scale = 0.85;
      coverRotation = -180;
    }
  }

  // Apply Transforms
  // En móvil, aseguramos que el estilo inline tenga prioridad
  book.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;

  if (coverOuter) coverOuter.style.transform = `rotateY(${coverRotation}deg)`;
  if (coverInner) coverInner.style.transform = `rotateY(${coverRotation}deg)`;

  requestAnimationFrame(updateBookAnimation);
}

// Start Animation Loop
document.addEventListener('DOMContentLoaded', () => {
  // Initial calculation
  cacheMetrics();
  // Slight delay to ensure layout is stable
  setTimeout(cacheMetrics, 100);

  // Update on resize
  window.addEventListener('resize', cacheMetrics);

  requestAnimationFrame(updateBookAnimation);
});
