(function () {
  var HEADER_OFFSET = 88;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var lenis = null;

  if (window.Lenis && !reduceMotion) {
    lenis = new window.Lenis({
      duration: 1.6,
      easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); },
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1
    });

    var raf = function (time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var id = this.getAttribute('href').slice(1);
      e.preventDefault();
      if (!id) return;
      var el = document.getElementById(id);
      if (!el) return;

      if (lenis) {
        lenis.scrollTo(el, { offset: -HEADER_OFFSET, duration: 1.6 });
      } else {
        var targetY = Math.max(el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET, 0);
        window.scrollTo({ top: targetY, behavior: reduceMotion ? 'auto' : 'smooth' });
      }
    });
  });

  var toggle = document.querySelector('.menu-toggle');
  var mobileNav = document.getElementById('mobile-nav');

  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      var isOpen = mobileNav.classList.toggle('is-open');
      toggle.classList.toggle('is-open', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('is-open');
        toggle.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  var header = document.querySelector('.site-header');

  if (header) {
    var updateHeaderBorder = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 0);
    };
    updateHeaderBorder();
    window.addEventListener('scroll', updateHeaderBorder, { passive: true });
  }

  var form = document.getElementById('contact-form');
  var note = document.getElementById('form-note');

  if (form && note) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      note.textContent = "Thanks — we'll be in touch shortly.";
      form.reset();
    });
  }
})();
