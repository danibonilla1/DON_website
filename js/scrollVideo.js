// Simple autoplay video controller
class AutoplayVideoController {
  constructor() {
    this.videos = [];
    this.init();
  }

  /* ---------- INIT ---------- */
  init() {
    this.setupVideos();
    this.setupIntersectionObserver();
  }

  /* ---------- VIDEO SETUP ---------- */
  setupVideos() {
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting && !e.target.dataset.loaded) {
            e.target.preload = 'metadata';
            e.target.load();
            e.target.dataset.loaded = 'true';
            
            // Agregar clase CSS para transición suave
            setTimeout(() => {
              e.target.classList.add('loaded');
            }, 100);
          }
        });
      },
      { rootMargin: '300px' }
    );

    document.querySelectorAll('.journey-video').forEach(video => {
      const data = {
        element   : video,
        step      : video.closest('.journey-step'),
        loading   : video.parentElement.querySelector('.video-loading'),
        duration  : 0,
        isLoaded  : false,
        isVisible : false
      };

      video.addEventListener('loadedmetadata', () => {
        data.duration = video.duration;
        data.isLoaded = true;
        data.loading?.classList.add('hidden');
      });

      video.addEventListener('ended', () => {
        // Reproducir en loop
        video.currentTime = 0;
        video.play().catch(() => {});
      });

      video.muted = true;
      video.preload = 'none';
      video.loop = true;
      video.autoplay = true;

      this.videos.push(data);
      io.observe(video);
    });
  }

  /* ---------- FADE-IN OBSERVER ---------- */
  setupIntersectionObserver() {
    const cards = document.querySelectorAll('.feature-card, .fade-in, .journey-step');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), idx * 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );
    cards.forEach(card => observer.observe(card));

    if (!('IntersectionObserver' in window)) {
      cards.forEach(card => card.classList.add('visible'));
    }
  }

  /* ---------- Public helpers ---------- */
  getVideoStates() { 
    return this.videos.map(v => ({
      isLoaded: v.isLoaded,
      isVisible: v.isVisible,
      isPlaying: !v.element.paused,
      currentTime: v.element.currentTime,
      duration: v.duration
    }));
  }
}

/* ---------- INIT ---------- */
document.addEventListener('DOMContentLoaded', () => {
  window.autoplayVideoController = new AutoplayVideoController();
});
