// Handle click/tap and swipe events for feature cards

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.feature-card');
    
// Agregar esta línea donde están los otros cards
const authorCard = document.querySelector('.author-flip-card');
if (authorCard) {
    authorCard.addEventListener('click', function(e) {
        if (!isSwipe) {
            e.preventDefault();
            toggleCard(this);
        }
        isSwipe = false;
    });
    
    // También agregar los eventos touch para mobile igual que las otras tarjetas
}

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
      const t = e.touches[0];
      startX = t.clientX;
      startY = t.clientY;
      isSwipe = false;
    }, { passive: true });

    card.addEventListener('touchmove', e => {
      if (!startX && !startY) return;

      const t = e.touches[0];
      const diffX = Math.abs(t.clientX - startX);
      const diffY = Math.abs(t.clientY - startY);

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
  }
});

document.addEventListener('DOMContentLoaded', function() {
    const authorCard = document.querySelector('.author-flip-card');
    
    
    
    if (authorCard) {
        let startX = 0;
        let startY = 0;
        let isSwipe = false;
        let touchStartTime = 0;
        
        // Mouse click for desktop
        authorCard.addEventListener('click', function(e) {
            if (!isSwipe) {
                e.preventDefault();
                this.classList.toggle('flipped');
            }
            isSwipe = false;
        });
        
        // Touch events for mobile
        authorCard.addEventListener('touchstart', function(e) {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            touchStartTime = Date.now();
            isSwipe = false;
        }, { passive: true });
        
        authorCard.addEventListener('touchmove', function(e) {
            if (!startX || !startY) return;
            
            const currentX = e.touches[0].clientX;
            const currentY = e.touches[0].clientY;
            
            const diffX = Math.abs(currentX - startX);
            const diffY = Math.abs(currentY - startY);
            
            // More sensitive swipe detection for mobile
            if (diffX > diffY && diffX > 30) {
                isSwipe = true;
                e.preventDefault();
            }
        }, { passive: false });
        
        authorCard.addEventListener('touchend', function(e) {
            const touchEndTime = Date.now();
            const touchDuration = touchEndTime - touchStartTime;
            
            // Handle both swipe and tap
            if (isSwipe || touchDuration < 300) {
                e.preventDefault();
                this.classList.toggle('flipped');
            }
            
            startX = 0;
            startY = 0;
            setTimeout(() => { isSwipe = false; }, 100);
        }, { passive: false });
        
        // Keyboard support for accessibility
        authorCard.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.classList.toggle('flipped');
            }
        });
        
        // Make focusable for keyboard navigation
        authorCard.setAttribute('tabindex', '0');
        authorCard.setAttribute('role', 'button');
        authorCard.setAttribute('aria-label', 'Click or tap to flip card and see more information about the author');
    }
    
});
