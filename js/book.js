// Book section scroll logic
const etherealMessages = [
  "The beginning of a great adventure...",
  "",
  "",
  ""
];

let currentStep = 0;
let ticking = false;

function updateBookSteps() {
  const bookSection = document.querySelector('.book-section');
  const bookContainer = document.querySelector('.book-container');
  const book = document.getElementById('book');
  const etherealIndicator = document.getElementById('etherealIndicator');
  const etherealText = document.getElementById('etherealText');

  if (!bookSection || !bookContainer || !book || !etherealIndicator || !etherealText) {
    console.warn('Faltan elementos necesarios para el scroll effect');
    return;
  }

  const rect = bookSection.getBoundingClientRect();
  const sectionHeight = bookSection.offsetHeight;
  const windowHeight = window.innerHeight;

  // Calcular progreso con entrada/salida suave
  let progress;
  if (rect.top > 0) {
    progress = 0;
  } else if (rect.bottom < windowHeight * 0.9) {
    progress = 1;
  } else {
    const scrollable = sectionHeight - windowHeight;
    const scrolled = Math.abs(rect.top);
    progress = Math.min(1, Math.max(0, scrolled / scrollable));
  }

  // Toggle visibilidad
  if (progress > 0.05 && progress < 0.95) {
    bookContainer.classList.add('visible');
    etherealIndicator.classList.add('visible');
  } else {
    bookContainer.classList.remove('visible');
    etherealIndicator.classList.remove('visible');
  }

  // Mapeo de pasos (0–4) con duraciones ajustadas
  let newStep;
  if (progress <= 0.2) {
    newStep = 0;
  } else if (progress <= 0.45) {
    newStep = 1;
  } else if (progress <= 0.7) {
    newStep = 2;
  } else if (progress <= 0.85) {
    newStep = 3;
  } else {
    newStep = 4;
  }

  if (newStep !== currentStep) {
    currentStep = newStep;
    book.className = `book step-${currentStep}`;

    // Actualizar mensaje etéreo con fade
    const msgIdx = Math.min(currentStep, etherealMessages.length - 1);
    etherealText.style.opacity = '0';
    setTimeout(() => {
      etherealText.textContent = etherealMessages[msgIdx];
      etherealText.style.opacity = '1';
    }, 250);
  }
}

// Scroll optimization
function requestTick() {
  if (!ticking) {
    requestAnimationFrame(() => {
      updateBookSteps();
      ticking = false;
    });
    ticking = true;
  }
}

// Listeners
window.addEventListener('scroll', requestTick, { passive: true });
window.addEventListener('load', updateBookSteps);
window.addEventListener('resize', () => setTimeout(updateBookSteps, 100));
document.addEventListener('DOMContentLoaded', () => setTimeout(updateBookSteps, 100));
