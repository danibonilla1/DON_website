// Book section scroll logic

        const etherealMessages = [
            "The beginning of a great adventure...",
            "",
            "",
            ""
        ];

        let currentStep = 0;
        let lastScrollY = 0;

        const bookSection = document.querySelector('.book-section');
        const bookContainer = document.querySelector('.book-container');
        const etherealIndicator = document.getElementById('etherealIndicator');

        const io = new IntersectionObserver(entries => {
            if (!entries[0].isIntersecting) {
                bookContainer.classList.remove('visible');
                etherealIndicator.classList.remove('visible');
            }
        }, { rootMargin: '0px 0px -30% 0px' });
        io.observe(bookSection);

        function updateBookSteps() {
            const book = document.getElementById('book');
            const etherealText = document.getElementById('etherealText');
            
            const rect = bookSection.getBoundingClientRect();
            const sectionHeight = bookSection.offsetHeight;
            const windowHeight = window.innerHeight;

            // Calcular progreso con entrada y salida suave
            let progress;
            if (rect.top > windowHeight * 0) {
                progress = 0;
            } else if (rect.bottom < windowHeight * 1.5) {
                progress = 1;
            } else {
                const scrollableHeight = sectionHeight - windowHeight;
                const scrolled = Math.abs(rect.top) - windowHeight * 0;
                progress = Math.min(1, Math.max(0, scrolled / scrollableHeight));
            }

            // Toggle visibilidad con transición suave
            if (progress > 0.05 && progress < 0.95) {
                bookContainer.classList.add('visible');
                etherealIndicator.classList.add('visible');
            } else {
                bookContainer.classList.remove('visible');
                etherealIndicator.classList.remove('visible');
            }

            // Calcular paso con más tiempo en cada estado
            let newStep;
            if (progress <= 0.2) {
                newStep = 0;
            } else if (progress <= 0.45) {
                newStep = 1;
            } else if (progress <= 0.7) {
                newStep = 2;
            } else if (progress <= 0.85) {
                newStep = 4;
            } else {
                newStep = 4;
            }

            // Actualizar paso si ha cambiado
            if (newStep !== currentStep) {
                currentStep = newStep;
                book.className = `book step-${currentStep}`;

                // Actualizar mensaje etéreo con transición
                const messageIndex = Math.min(currentStep, etherealMessages.length - 1);
                etherealText.style.opacity = '0';
                setTimeout(() => {
                    etherealText.textContent = etherealMessages[messageIndex];
                    etherealText.style.opacity = '1';
                }, 250);
            }
        }

        // Optimización de scroll para móviles
        let ticking = false;
        function requestTick() {
            if (!ticking) {
                requestAnimationFrame(updateBookSteps);
                ticking = true;
                setTimeout(() => { ticking = false; }, 16);
            }
        }

        // Event listeners
        window.addEventListener('scroll', requestTick, { passive: true });
        window.addEventListener('load', updateBookSteps);
        window.addEventListener('resize', () => {
            setTimeout(updateBookSteps, 100);
        });
        window.addEventListener('orientationchange', () => {
            setTimeout(updateBookSteps, 100);
        });

        // Inicialización
        updateBookSteps();
