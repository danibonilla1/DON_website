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

  // Calcular progreso lineal dentro de la sección
  const scrollable = Math.max(1, sectionHeight - windowHeight);
  const scrolled = Math.max(0, -rect.top);
  const progress = Math.min(1, Math.max(0, scrolled / scrollable));

  // Mostrar el libro mientras la sección esté en el viewport (solapa con la ventana)
  const inView = rect.top < windowHeight && rect.bottom > 0;
  if (inView) {
    bookContainer.classList.add('visible');
    etherealIndicator.classList.add('visible');
  } else {
    bookContainer.classList.remove('visible');
    etherealIndicator.classList.remove('visible');
  }

  // Mapeo de pasos (0,1,2,4) saltando el penúltimo paso (3)
  let newStep;
  if (progress < 0.2) {
    newStep = 0;
  } else if (progress < 0.45) {
    newStep = 1;
  } else if (progress < 0.7) {
    newStep = 2;
  } else {
    newStep = 4; // giro completo
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
