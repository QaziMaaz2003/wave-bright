/*
 * Wavcomm — count-up metrics for the WordPress build (vanilla JS, no dependencies).
 *
 * Usage: give any element  data-count-to="30"  (and optionally data-count-suffix="+").
 *   <div class="wb-stat__value"><span data-count-to="30" data-count-suffix="+">30+</span></div>
 * Enqueue this file in the footer:  wp_enqueue_script('wb-count-up', get_theme_file_uri('count-up.js'), [], '1.0', true);
 * The element's own text is the no-JS / reduced-motion fallback.
 */
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var nodes = document.querySelectorAll('[data-count-to]');
  if (!nodes.length || reduce || !('IntersectionObserver' in window)) return;

  function ease(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function run(el) {
    var to = parseFloat(el.getAttribute('data-count-to')) || 0;
    var suffix = el.getAttribute('data-count-suffix') || '';
    var duration = 2200;
    var start = performance.now();
    function tick(now) {
      var p = Math.min(Math.max((now - start) / duration, 0), 1);
      el.textContent = Math.round(to * ease(p)) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          io.unobserve(entry.target);
          run(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  nodes.forEach(function (el) {
    el.textContent = '0' + (el.getAttribute('data-count-suffix') || '');
    io.observe(el);
  });
})();
