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
  // On mobile, CSS handles the static book display - skip JS animation
  if (window.innerWidth < 768) {
    requestAnimationFrame(updateBookAnimation);
    return;
  }

  const bookSection = document.querySelector('.book-section');
  const bookContainer = document.querySelector('.book-container');
  const book = document.getElementById('book');
  const coverOuter = document.querySelector('.book-cover-outer');
  const coverInner = document.querySelector('.book-cover-inner');

  if (!bookSection || !bookContainer || !book) {
    requestAnimationFrame(updateBookAnimation);
    return;
  }

  // Ensure metrics are initialized
  if (metrics.totalDistance === 0) {
    cacheMetrics();
  }

  // Use cached metrics + current scroll
  const scrollY = window.pageYOffset || document.documentElement.scrollTop;

  // Calculate distance from the point where the section ENTRES the viewport
  // Entry point: scrollY = sectionTop - windowHeight
  const startScroll = metrics.sectionTop - metrics.windowHeight;

  // Current position relative to the start of the effect
  const currentPos = scrollY - startScroll;

  // Normalized progress 0 to 1
  let targetProgress = 0;
  if (metrics.totalDistance > 0) {
    targetProgress = currentPos / metrics.totalDistance;
  }
  // Clamp target
  targetProgress = Math.min(Math.max(targetProgress, 0), 1);

  // Detect mobile dynamically (screen could be resized)
  const isMobileDevice = window.innerWidth < 768;

  // On mobile: NO LERP - follow scroll directly to avoid jank with momentum scroll
  // On desktop: smooth LERP for elegant animation
  if (isMobileDevice) {
    currentProgress = targetProgress;
  } else {
    const delta = targetProgress - currentProgress;
    // Skip LERP for tiny deltas to avoid micro-jitter
    if (Math.abs(delta) < 0.001) {
      currentProgress = targetProgress;
    } else {
      currentProgress += delta * 0.1;
    }
  }
  const progress = currentProgress;

  // Visibility Logic
  const isVisible = progress > 0 && progress < 1;

  if (isVisible) {
    bookContainer.classList.add('visible');
  } else {
    bookContainer.classList.remove('visible');
  }

  // Animation Phases (3 Discrete Scroll Moments)
  // SCROLL 1 (0.0 - 0.5): Show book straight, tilt and open (EVEN SLOWER)
  // SCROLL 2 (0.5 - 0.75): Flip the book
  // SCROLL 3 (0.75 - 1.0): Continue rotating slowly in same direction

  let translateY, translateX, rotateY, rotateX, scale, coverRotation;

  if (progress < 0.5) {
    // SCROLL 1: SHOW STRAIGHT + TILT + OPEN (even slower opening)
    const p = mapRange(progress, 0, 0.5, 0, 1);

    translateY = mapRange(p, 0, 1, 80, -10); // Appears and centers
    translateX = 0;
    rotateY = mapRange(p, 0, 1, 0, -20); // Tilts Y
    rotateX = mapRange(p, 0, 1, 0, 10); // Tilts X
    scale = mapRange(p, 0, 1, 0.6, 0.85); // Grows to size
    coverRotation = mapRange(p, 0, 1, 0, -120); // Opens fully (slower)

  } else if (progress < 0.75) {
    // SCROLL 2: FLIP
    const p = mapRange(progress, 0.5, 0.75, 0, 1);

    translateY = -10; // Stay centered
    translateX = mapRange(p, 0, 1, 0, -150); // Moves left
    rotateY = mapRange(p, 0, 1, -20, -180); // Flips
    rotateX = mapRange(p, 0, 1, 10, 0); // Flattens
    scale = 0.85; // Maintain size
    coverRotation = mapRange(p, 0, 1, -120, -180); // Closes

  } else {
    // SCROLL 3: CONTINUE ROTATING SLOWLY (same direction)
    const p = mapRange(progress, 0.75, 1.0, 0, 1);

    translateY = -10;
    translateX = -150;
    rotateY = mapRange(p, 0, 1, -180, -200); // Continue rotating slowly
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
