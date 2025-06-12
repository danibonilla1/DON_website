// Scroll-synced video controller
class ScrollVideoController {
  constructor(opts = {}) {
    this.videos = [];
    this.isScrolling = false;
    this.scrollTimeout = null;
    this.lastScrollTime = 0;

    // ---------- Tuning ----------
    this.slowRate     = opts.slowRate     ?? 0.2;
    this.hoverRate    = opts.hoverRate    ?? 1.0;
    this.focusOffset  = opts.focusOffset  ?? 0.30;
    this.scrubEpsilon = opts.scrubEpsilon ?? 0.05;
    this.scrollRate   = opts.scrollRate   ?? 0.003;
    this.scrollThreshold = opts.scrollThreshold ?? 150;

    // 🔸 Responsive focus
    this.mobileBreakpoint        = opts.mobileBreakpoint        ?? 768;  // px
    this.responsiveFocusPercent  = opts.responsiveFocusPercent  ?? 0.25; // 25 %

    this.lastScrollY  = window.scrollY;
    this.scrollDelta  = 0;

    this.init();
  }

  /* ---------- INIT ---------- */
  init() {
    this.setupVideos();
    this.setupScrollListener();
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
          }
        });
      },
      { rootMargin: '200px' }
    );

    document.querySelectorAll('.journey-video').forEach(video => {
      const data = {
        element   : video,
        step      : video.closest('.journey-step'),
        loading   : video.parentElement.querySelector('.video-loading'),
        duration  : 0,
        isLoaded  : false,
        isVisible : false,
        isHovered : false
      };

      video.addEventListener('loadedmetadata', () => {
        data.duration = video.duration;
        data.isLoaded = true;
        data.loading?.classList.add('hidden');
      });

      video.addEventListener('ended', () => {
        video.currentTime = 0;
        const rate = data.isHovered ? this.hoverRate : this.slowRate;
        video.playbackRate = rate;
        video.play().catch(() => {});
      });

      video.addEventListener('mouseenter', () => {
        data.isHovered = true;
        this.updateVideos();
      });
      video.addEventListener('mouseleave', () => {
        data.isHovered = false;
        this.updateVideos();
      });

      video.muted = true;
      video.preload = 'none';
      video.playbackRate = 1;

      this.videos.push(data);
      io.observe(video);
    });
  }

  /* ---------- SCROLL LISTENER ---------- */
  setupScrollListener() {
    const onScroll = () => {
      const newY = window.scrollY;
      this.scrollDelta = newY - this.lastScrollY;
      this.lastScrollY = newY;

      this.isScrolling = true;
      this.lastScrollTime = performance.now();

      clearTimeout(this.scrollTimeout);
      this.updateVideos();

      this.scrollTimeout = setTimeout(() => {
        if (performance.now() - this.lastScrollTime >= this.scrollThreshold) {
          this.isScrolling = false;
          this.updateVideos();
        }
      }, this.scrollThreshold);
    };

    ['scroll', 'wheel', 'touchmove'].forEach(evt =>
      window.addEventListener(evt, onScroll, { passive: true })
    );
  }

  /* ---------- CORE LOOP ---------- */
  updateVideos() {
    const winH     = window.innerHeight;
    const isMobile = window.innerWidth <= this.mobileBreakpoint;

    this.videos.forEach(data => {
      if (!data.isLoaded) return;

      const rect       = data.step.getBoundingClientRect();
      const inViewport = rect.top < winH && rect.bottom > 0;
      data.isVisible   = inViewport;

      /* 🔸 Responsive “scrolled-in” focus (simula hover) ---------- */
      if (isMobile && inViewport) {
        const centerY      = rect.top + rect.height / 2;
        const zoneMargin   = winH * this.responsiveFocusPercent;
        const isScrolledIn = centerY >= zoneMargin && centerY <= winH - zoneMargin;

        data.element.classList.toggle('scrolled-in', isScrolledIn);

        if (isScrolledIn && !this.isScrolling && data.element.paused) {
          data.element.play().catch(() => {});
        }
        if (!isScrolledIn && !data.isHovered) {
          data.element.pause();
        }
      } else {
        data.element.classList.remove('scrolled-in');
      }
      /* ---------------------------------------------------------- */

      if (!inViewport) {
        data.element.pause();
        return;
      }

      const centerDist = Math.abs(rect.top + rect.height / 2 - winH / 2);
      const isFocused  = centerDist < winH * this.focusOffset;

      if (this.isScrolling && isFocused) {
        // Scrubbing
        data.element.pause();
        data.element.playbackRate = 1;
        let newTime = data.element.currentTime + this.scrollDelta * this.scrollRate;
        newTime = Math.max(0, Math.min(newTime, data.duration));
        if (Math.abs(newTime - data.element.currentTime) > this.scrubEpsilon) {
          data.element.currentTime = newTime;
        }
      } else if (data.isHovered) {
        if (data.element.paused) data.element.play().catch(() => {});
        data.element.playbackRate = this.hoverRate;
      } else if (isFocused && !this.isScrolling) {
        if (data.element.paused) data.element.play().catch(() => {});
        data.element.playbackRate = this.slowRate;
      } else {
        data.element.pause();
      }
    });

    this.scrollDelta = 0;
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
  getVideoStates() { /* …igual… */ }
  updateSettings(newOpts) { Object.assign(this, newOpts); }
}

/* ---------- INIT ---------- */
document.addEventListener('DOMContentLoaded', () => {
  window.scrollVideoController = new ScrollVideoController({
    slowRate: 0.2,
    hoverRate: 1.0,
    focusOffset: 0.30,
    scrubEpsilon: 0.05,
    scrollRate: 0.009,
    scrollThreshold: 150,
    responsiveFocusPercent: 0.25, // 25% viewport
    mobileBreakpoint: 768         // hasta 768 px es “móvil”
  });
});
