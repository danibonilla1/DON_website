// Handle click/tap and swipe events for feature cards

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
    const indicator = el.querySelector('.flip-indicator');
    if (!indicator) return;
    if (el.classList.contains('flipped')) {
      indicator.style.transform = 'rotate(180deg)';
      indicator.textContent = '↺';
    } else {
      indicator.style.transform = 'rotate(0deg)';
      indicator.textContent = '↻';
    }
  }
});
