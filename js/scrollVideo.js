// Scroll-synced video controller

class ScrollVideoController {
  constructor(opts = {}) {
    this.videos = [];
    this.isScrolling = false;
    this.scrollTimeout = null;
    this.lastScrollTime = 0;

    // --- parámetros fáciles de tunear ---
    this.slowRate     = opts.slowRate     ?? 0.3;  // velocidad cuando no se hace scroll
    this.focusOffset  = opts.focusOffset  ?? 0.30;  // 30 % del viewport = enfocado
    this.scrubEpsilon = opts.scrubEpsilon ?? 0.07;  // salto mínimo antes de mover currentTime
    this.scrollRate   = opts.scrollRate   ?? 0.002; // segundos por pixel scrolleado

    // --- para control incremental ---
    this.lastScrollY  = window.scrollY;
    this.scrollDelta  = 0;

    this.init();
  }

  /* --------------- INIT --------------- */
  init() {
    this.setupVideos();
    this.setupScrollListener();
    this.setupIntersectionObserver();
  }

  /* -------- VIDEO SETUP -------- */
  setupVideos() {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.loaded) {
          entry.target.preload = 'metadata';
          entry.target.load();
          entry.target.dataset.loaded = 'true';
        }
      });
    }, { rootMargin: '200px' });

    document.querySelectorAll('.journey-video').forEach((video) => {
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

      video.muted   = true;
      video.preload = 'none';

      this.videos.push(data);
      io.observe(video);
    });
  }

  /* -------- SCROLL HANDLING -------- */
  setupScrollListener() {
    const onScroll = () => {
      // Calcular diferencia de scroll
      const newY = window.scrollY;
      this.scrollDelta = newY - this.lastScrollY;
      this.lastScrollY = newY;

      this.isScrolling = true;
      this.lastScrollTime = performance.now();
      if (this.scrollTimeout) clearTimeout(this.scrollTimeout);

      this.updateVideos(); // avanza vídeos según scroll

      this.scrollTimeout = setTimeout(() => {
        if (performance.now() - this.lastScrollTime >= 120) {
          this.isScrolling = false;
          this.updateVideos(); // cambio a slow-mo
        }
      }, 120);
    };

    ['scroll', 'wheel', 'touchmove'].forEach(evt =>
      window.addEventListener(evt, onScroll, { passive: true })
    );
  }

  /* -------- CORE LOOP -------- */
  updateVideos() {
    const winH = window.innerHeight;

    this.videos.forEach(data => {
      if (!data.isLoaded) return;

      const rect       = data.step.getBoundingClientRect();
      const inViewport = rect.top < winH && rect.bottom > 0;
      data.isVisible   = inViewport;

      if (!inViewport) {
        data.element.pause();
        return;
      }

      const centerDist = Math.abs((rect.top + rect.height / 2) - winH / 2);
      const isFocused  = centerDist < winH * this.focusOffset;

      if (this.isScrolling) {
        // -------- SCRUBBING INCREMENTAL --------
        data.element.pause();
        data.element.playbackRate = 1;

        // Sumar tiempo proporcional al desplazamiento del scroll
        let newTime = data.element.currentTime + this.scrollDelta * this.scrollRate;
        newTime = Math.max(0, Math.min(newTime, data.duration));
        if (Math.abs(newTime - data.element.currentTime) > this.scrubEpsilon)
          data.element.currentTime = newTime;
      } else if (isFocused) {
        // -------- SLOW-MOTION --------
        if (data.element.paused) data.element.play().catch(() => {});
        data.element.playbackRate = this.slowRate;
      } else {
        data.element.pause();
      }
    });

    // Reset delta después de aplicar en todos los vídeos
    this.scrollDelta = 0;
  }

  /* -------- HELPERS -------- */
  easeInOutCubic(t) {
    return t < 0.5 ? 4 * t ** 3 : 1 - ((-2 * t + 2) ** 3) / 2;
  }

  /* -------- FADE-IN ANIMATION -------- */
  setupIntersectionObserver() {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => e.isIntersecting && e.target.classList.add('visible'));
    }, { threshold: 0.3, rootMargin: '0px 0px -10% 0px' });

    document.querySelectorAll('.fade-in, .journey-step').forEach(el => io.observe(el));
  }
}

/* ---------- INICIALIZAR ---------- */
document.addEventListener('DOMContentLoaded', () => new ScrollVideoController());

