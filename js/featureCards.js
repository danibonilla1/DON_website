// Flip card interactions for the "Sacred Elements" section
// Enables click and swipe gestures for mobile and desktop

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.feature-card');

    cards.forEach(card => {
        let startX = 0;
        let startY = 0;
        let isSwipe = false;

        card.addEventListener('click', e => {
            if (!isSwipe) {
                e.preventDefault();
                toggleCard(card);
            }
            isSwipe = false;
        });

        card.addEventListener('touchstart', e => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            isSwipe = false;
        }, { passive: true });

        card.addEventListener('touchmove', e => {
            if (!startX || !startY) return;
            const currentX = e.touches[0].clientX;
            const currentY = e.touches[0].clientY;
            const diffX = Math.abs(currentX - startX);
            const diffY = Math.abs(currentY - startY);

            if (diffX > diffY && diffX > 50) {
                isSwipe = true;
                e.preventDefault();
                toggleCard(card);
                startX = 0;
                startY = 0;
            }
        }, { passive: false });

        card.addEventListener('touchend', () => {
            startX = 0;
            startY = 0;
            setTimeout(() => { isSwipe = false; }, 100);
        });
    });

    function toggleCard(el) {
        el.classList.toggle('flipped');
        const indicator = el.querySelector('.flip-indicator');
        if (el.classList.contains('flipped')) {
            indicator.style.transform = 'rotate(180deg)';
            indicator.innerHTML = '↺';
        } else {
            indicator.style.transform = 'rotate(0deg)';
            indicator.innerHTML = '↻';
        }
    }
});
