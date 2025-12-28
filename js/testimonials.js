// Testimonial carousel interactions

let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;
const container = document.getElementById('testimonialsContainer');

// Variables para el swipe
let startX = 0;
let startY = 0;
let isMouseDown = false;
let autoRotateInterval;

function updateTestimonialClasses() {
    testimonials.forEach((testimonial, index) => {
        testimonial.classList.remove('active', 'behind-left', 'behind-right', 'cloud-1', 'cloud-2', 'cloud-3', 'cloud-4', 'cloud-5', 'cloud-6');

        if (index === currentTestimonial) {
            testimonial.classList.add('active');
        } else if (index === (currentTestimonial - 1 + totalTestimonials) % totalTestimonials) {
            testimonial.classList.add('behind-left');
        } else if (index === (currentTestimonial + 1) % totalTestimonials) {
            testimonial.classList.add('behind-right');
        } else {
            // Distribuir el resto de comentarios en posiciones de nube aleatoriamente
            const cloudPositions = ['cloud-1', 'cloud-2', 'cloud-3', 'cloud-4', 'cloud-5', 'cloud-6'];
            const relativeIndex = Math.abs(index - currentTestimonial);
            const cloudClass = cloudPositions[(relativeIndex - 2) % cloudPositions.length];
            testimonial.classList.add(cloudClass);
        }
    });
}

function showTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialClasses();
}

function nextTestimonial() {
    const nextIndex = (currentTestimonial + 1) % totalTestimonials;
    showTestimonial(nextIndex);
}

function prevTestimonial() {
    const prevIndex = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
    showTestimonial(prevIndex);
}

let restartTimeout;

function startAutoRotate() {
    stopAutoRotate(); // Ensure no duplicate intervals
    autoRotateInterval = setInterval(nextTestimonial, 4000);
}

function stopAutoRotate() {
    clearInterval(autoRotateInterval);
    clearTimeout(restartTimeout);
}

function restartAutoRotate() {
    stopAutoRotate();
    restartTimeout = setTimeout(startAutoRotate, 3000); // Reinicia después de 3 segundos
}

// Event listeners para touch (móvil)
container.addEventListener('touchstart', function (e) {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    stopAutoRotate();
}, { passive: true });

container.addEventListener('touchmove', function (e) {
    if (!startX || !startY) return;

    let diffX = startX - e.touches[0].clientX;
    let diffY = startY - e.touches[0].clientY;

    // Solo procesar si el movimiento horizontal es mayor que el vertical
    if (Math.abs(diffX) > Math.abs(diffY)) {
        e.preventDefault();
    }
}, { passive: false });

container.addEventListener('touchend', function (e) {
    if (!startX || !startY) return;

    let endX = e.changedTouches[0].clientX;
    let endY = e.changedTouches[0].clientY;

    let diffX = startX - endX;
    let diffY = startY - endY;

    // Solo procesar swipe si el movimiento horizontal es significativo
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX > 0) {
            // Swipe izquierda - siguiente
            nextTestimonial();
        } else {
            // Swipe derecha - anterior
            prevTestimonial();
        }
        restartAutoRotate();
    } else {
        // Si no fue un swipe válido, continuar auto-rotación
        startAutoRotate();
    }

    startX = 0;
    startY = 0;
}, { passive: true });

// Event listeners para mouse (escritorio)
container.addEventListener('mousedown', function (e) {
    startX = e.clientX;
    startY = e.clientY;
    isMouseDown = true;
    stopAutoRotate();
});

container.addEventListener('mousemove', function (e) {
    if (!isMouseDown) return;
    e.preventDefault();
});

container.addEventListener('mouseup', function (e) {
    if (!isMouseDown) return;

    let diffX = startX - e.clientX;
    let diffY = startY - e.clientY;

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX > 0) {
            nextTestimonial();
        } else {
            prevTestimonial();
        }
        restartAutoRotate();
    } else {
        startAutoRotate();
    }

    isMouseDown = false;
    startX = 0;
    startY = 0;
});

// Evitar arrastrar imágenes
container.addEventListener('dragstart', function (e) {
    e.preventDefault();
});

// Inicializar las clases
updateTestimonialClasses();

// Iniciar auto-rotación
startAutoRotate();

// Hacer clic en nombres de usuario para ir a sus perfiles
document.querySelectorAll('.comment-author-name').forEach(author => {
    author.addEventListener('click', function () {
        const username = this.getAttribute('data-username');
        window.open(`https://youtube.com/@${username}`, '_blank');
    });
});

// Pausar auto-rotación cuando el usuario interactúa con enlaces
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function () {
        stopAutoRotate();
        setTimeout(startAutoRotate, 5000);
    });
});
