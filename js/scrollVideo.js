// Scroll-synced video controller

class ScrollVideoManager {
    constructor() {
        this.video = null;
        this.videoContainer = null;
        this.sections = [];
        this.currentSectionIndex = 0;
        this.isScrolling = false;
        this.scrollTimeout = null;
        this.observer = null;

        this.init();
    }

    init() {
        this.video = document.getElementById('background-video');
        this.videoContainer = document.querySelector('.video-container');

        if (!this.video || !this.videoContainer) {
            console.warn('Video elements not found');
            return;
        }

        this.setupSections();
        this.setupIntersectionObserver();
        this.setupScrollHandler();
        this.setupVideoEvents();
    }

    setupSections() {
        // Definir las secciones con sus tiempos de video correspondientes
        this.sections = [
            { id: 'hero', startTime: 0, endTime: 10 },
            { id: 'essence', startTime: 10, endTime: 25 },
            { id: 'journey', startTime: 25, endTime: 40 },
            { id: 'preorder', startTime: 40, endTime: 55 }
        ];
    }

    setupIntersectionObserver() {
        // Configurar el observador para las animaciones fade-in
        const observerOptions = {
            threshold: 0.15,
            // Trigger a bit earlier so elements reveal properly on mobile
            rootMargin: '0px 0px -10% 0px'
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Añadir un pequeño delay para suavizar la animación
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, 100);
                }
            });
        }, observerOptions);

        // Observar todos los elementos con clase fade-in
        this.observeElements();
    }

    observeElements() {
        // Esperar a que el DOM esté completamente cargado
        const observer = () => {
            const elementsToObserve = document.querySelectorAll(
                '.fade-in, .journey-step, .feature-card, .option-card'
            );

            elementsToObserve.forEach(element => {
                // Asegurar que el elemento no tenga ya la clase visible
                element.classList.remove('visible');
                this.observer.observe(element);
            });
        };

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', observer);
        } else {
            observer();
        }
    }

    setupScrollHandler() {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    this.handleVideoSync();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
    }

    handleVideoSync() {
        if (!this.video) return;

        const scrollTop = window.pageYOffset;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;

        // Calcular el progreso del scroll (0 a 1)
        const scrollProgress = Math.min(scrollTop / documentHeight, 1);

        // Mapear el progreso del scroll al tiempo del video
        const videoDuration = this.video.duration || 60; // fallback duration
        const targetTime = scrollProgress * videoDuration;

        // Sincronizar el video solo si hay una diferencia significativa
        if (Math.abs(this.video.currentTime - targetTime) > 0.5) {
            this.video.currentTime = targetTime;
        }

        // Actualizar la sección actual
        this.updateCurrentSection(scrollTop);
    }

    updateCurrentSection(scrollTop) {
        const sections = document.querySelectorAll('section');
        let currentIndex = 0;

        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2) {
                currentIndex = index;
            }
        });

        if (currentIndex !== this.currentSectionIndex) {
            this.currentSectionIndex = currentIndex;
            this.triggerSectionAnimation(currentIndex);
        }
    }

    triggerSectionAnimation(sectionIndex) {
        // Animar elementos cuando cambien las secciones
        const currentSection = document.querySelectorAll('section')[sectionIndex];
        if (currentSection) {
            const elementsToAnimate = currentSection.querySelectorAll('.fade-in:not(.visible)');
            elementsToAnimate.forEach((element, index) => {
                setTimeout(() => {
                    element.classList.add('visible');
                }, index * 150); // Escalonar las animaciones
            });
        }
    }

    setupVideoEvents() {
        if (!this.video) return;

        this.video.addEventListener('loadedmetadata', () => {
            console.log('Video metadata loaded, duration:', this.video.duration);
        });

        this.video.addEventListener('canplay', () => {
            // Inicializar la posición del video
            this.handleVideoSync();
        });

        // Pausar el video para control manual
        this.video.addEventListener('play', () => {
            this.video.pause();
        });
    }

    // Método público para reinicializar las animaciones
    resetAnimations() {
        const elements = document.querySelectorAll('.fade-in.visible');
        elements.forEach(element => {
            element.classList.remove('visible');
        });

        // Volver a observar los elementos
        setTimeout(() => {
            this.observeElements();
        }, 100);
    }

    // Método público para forzar la animación de una sección específica
    animateSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            const elements = section.querySelectorAll('.fade-in');
            elements.forEach((element, index) => {
                setTimeout(() => {
                    element.classList.add('visible');
                }, index * 200);
            });
        }
    }

    // Cleanup method
    destroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
        window.removeEventListener('scroll', this.handleVideoSync);
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    window.scrollVideoManager = new ScrollVideoManager();
});

