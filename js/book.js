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

  // Detect Mobile using matchMedia (more reliable in DevTools responsive mode)
  const isMobile = window.matchMedia('(max-width: 767px)').matches;
  let targetProgress = 0;

  // ---------------- UNIFIED STICKY LOGIC ----------------
  // Ahora tanto en móvil como en desktop usamos layout sticky real.
  // Calculamos el progreso basándonos en cuánto se ha recorrido de la sección sticky.

  // Ensure metrics are initialized
  if (metrics.totalDistance === 0) {
    cacheMetrics();
  }

  // Use cached metrics + current scroll
  const scrollY = window.pageYOffset || document.documentElement.scrollTop;

  // Sticky logic calculation
  // startScroll = Cuando la sección llega a top=0 (o su offset sticky)
  // Usamos la lógica relativa al offset inicial de la sección
  const startScroll = metrics.sectionTop - metrics.windowHeight;
  const currentPos = scrollY - startScroll;

  if (metrics.totalDistance > 0) {
    targetProgress = currentPos / metrics.totalDistance;
  }

  // Clamp target
  targetProgress = Math.min(Math.max(targetProgress, 0), 1);

  // DEBUG
  // if(isMobile && Math.random() < 0.05) console.log('Unified Sticky:', { scrollY, currentPos, totalDistance: metrics.totalDistance, targetProgress });

  // ---------------- SMOOTHING (LERP) ----------------
  // En móvil queremos respuesta casi inmediata pero suavizada
  const lerpFactor = isMobile ? 0.3 : 0.1;

  if (Math.abs(targetProgress - currentProgress) < 0.0005) {
    currentProgress = targetProgress;
  } else {
    currentProgress += (targetProgress - currentProgress) * lerpFactor;
  }

  const progress = currentProgress;

  // ---------------- VISIBILITY ----------------
  const isVisible = progress > -0.1 && progress < 1.1;

  if (isVisible) {
    bookContainer.classList.add('visible');
  } else {
    bookContainer.classList.remove('visible');
  }

  // ---------------- ANIMATION PHASES ----------------
  let translateY, translateX, rotateY, rotateX, scale, coverRotation;

  // --- ANIMATION PHASES (Unified for Mobile and Desktop) ---
  // Animación completa: entrar, abrir, flip, rotar

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
    // SCROLL 3: CONTINUE ROTATING
    const p = mapRange(progress, 0.75, 1.0, 0, 1);
    translateY = -10;
    translateX = -150;
    rotateY = mapRange(p, 0, 1, -180, -200);
    rotateX = 0;
    scale = 0.85;
    coverRotation = -180;
  }

  // Apply Transforms
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
