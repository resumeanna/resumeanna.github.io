// ResumeAnna — shared scripts
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', function () {
  // Mobile navigation
  var toggle = document.querySelector('.nav-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      document.body.classList.toggle('nav-open');
    });
    document.querySelectorAll('.site-nav a').forEach(function (link) {
      link.addEventListener('click', function () {
        document.body.classList.remove('nav-open');
      });
    });
  }

  // Reveal-on-scroll animations
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }

  // Back button — step back through in-site history when there is any,
  // otherwise fall through to the href (the page's logical parent).
  var back = document.querySelector('[data-back]');
  if (back) {
    back.addEventListener('click', function (e) {
      var from = document.referrer;
      if (from && from.indexOf(window.location.origin) === 0 && history.length > 1) {
        e.preventDefault();
        history.back();
      }
    });
  }

  // Footer year
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Promo popup — opens on landing, closes on X / backdrop / Esc, and
  // auto-closes after 12s (the progress bar animation is the countdown).
  var promo = document.getElementById('promoPop');
  if (promo) {
    var timer = null;

    function closePromo() {
      if (promo.hidden) return;
      clearTimeout(timer);
      promo.hidden = true;
      document.body.classList.remove('promo-open');
      document.removeEventListener('keydown', onKey);
    }
    function onKey(e) { if (e.key === 'Escape') closePromo(); }

    function openPromo() {
      promo.hidden = false;
      document.body.classList.add('promo-open');
      document.addEventListener('keydown', onKey);
      timer = setTimeout(closePromo, 12000);
      var x = promo.querySelector('.promo-x');
      if (x) x.focus({ preventScroll: true });
    }

    promo.querySelectorAll('[data-promo-close]').forEach(function (el) {
      el.addEventListener('click', closePromo);
    });
    // following an offer link should not leave the popup mid-close
    promo.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { clearTimeout(timer); });
    });

    setTimeout(openPromo, 700);
  }

  // Cover-letter lightbox — opens from the "View cover letter" button,
  // closes on X / backdrop / Esc. Restores focus to the trigger on close.
  var clPop = document.getElementById('clPop');
  if (clPop) {
    var clLast = null;

    function closeCl() {
      if (clPop.hidden) return;
      clPop.hidden = true;
      document.body.classList.remove('promo-open');
      document.removeEventListener('keydown', onClKey);
      if (clLast) { clLast.focus({ preventScroll: true }); clLast = null; }
    }
    function onClKey(e) { if (e.key === 'Escape') closeCl(); }

    function openCl(trigger) {
      clLast = trigger || null;
      clPop.hidden = false;
      document.body.classList.add('promo-open');
      document.addEventListener('keydown', onClKey);
      var x = clPop.querySelector('.cl-x');
      if (x) x.focus({ preventScroll: true });
    }

    document.querySelectorAll('[data-cl-open]').forEach(function (btn) {
      btn.addEventListener('click', function () { openCl(btn); });
    });
    clPop.querySelectorAll('[data-cl-close]').forEach(function (el) {
      el.addEventListener('click', closeCl);
    });
  }
});
