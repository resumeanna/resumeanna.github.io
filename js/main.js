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
});
