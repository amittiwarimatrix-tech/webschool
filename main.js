// ===== SCROLL REVEAL =====
const revealObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(function(el) {
  revealObserver.observe(el);
});
// ===== BACK TO TOP =====
var btn = document.getElementById('backToTop');
if (btn) {
  window.addEventListener('scroll', function() {
    btn.classList.toggle('visible', window.pageYOffset > 400);
  });
}
// ===== PAGE LOADER =====
window.addEventListener('load', function() {
  setTimeout(function() {
    var loader = document.getElementById('pageLoader');
    if (loader) loader.classList.add('hidden');
  }, 1200);
});
// ===== TESTIMONIALS SLIDER =====
var testTrack = document.getElementById('testTrack');
var testDots = document.getElementById('testDots');
if (testTrack) {
  var tTotal = testTrack.children.length;
  var tCur = 0;

  // Dots banao
  for (var i = 0; i < tTotal; i++) {
    var d = document.createElement('button');
    d.className = 't-dot' + (i === 0 ? ' active' : '');
    d.setAttribute('data-i', i);
    d.onclick = function() { tGoTo(parseInt(this.getAttribute('data-i'))); };
    testDots.appendChild(d);
  }

  function tGoTo(n) {
    tCur = n;
    testTrack.style.transform = 'translateX(-' + (n * 100) + '%)';
    document.querySelectorAll('.t-dot').forEach(function(d, i) {
      d.classList.toggle('active', i === n);
    });
  }

  // Auto play — 4 second
  setInterval(function() {
    tGoTo((tCur + 1) % tTotal);
  }, 4000);
}
