// Book section scroll logic - Direct Interpolation (No Lag)

let lastProgress = -1;
let animationFrameId;

// Map range function
const mapRange = (value, inMin, inMax, outMin, outMax) => {
  const clamped = Math.min(Math.max(value, inMin), inMax);
  return outMin + (outMax - outMin) * ((clamped - inMin) / (inMax - inMin));
};

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

  // Calculate Scroll Progress (0 to 1)
  const rect = bookSection.getBoundingClientRect();
  const sectionHeight = bookSection.offsetHeight;
  const windowHeight = window.innerHeight;

  // We want the animation to start AS SOON AS the section enters the viewport
  // Start: rect.top < windowHeight (entering)
  // End: rect.bottom < 0 (leaving)

  // Total distance the element travels from entering to leaving
  const totalDistance = sectionHeight + windowHeight;
  // Current position in that journey (0 at entry, totalDistance at exit)
  const currentPos = windowHeight - rect.top;

  // Normalized progress 0 to 1
  let progress = currentPos / totalDistance;
  progress = Math.min(Math.max(progress, 0), 1);

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
  requestAnimationFrame(updateBookAnimation);
});

