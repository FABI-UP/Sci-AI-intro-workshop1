/* Slide-deck navigation — keyboard, touch, hash, fragments, theme toggle.
   No dependencies. Works offline. */
(function () {
  const slides = Array.from(document.querySelectorAll('.slide'));
  const progress = document.querySelector('.progress');
  const slideNum = document.querySelector('.slide-num');
  let i = 0, frag = 0;

  function fragsOf(s) { return Array.from(s.querySelectorAll('.frag')); }

  function render() {
    slides.forEach((s, n) => s.classList.toggle('active', n === i));
    const cur = slides[i];
    const frags = fragsOf(cur);
    frags.forEach((f, n) => f.classList.toggle('shown', n < frag));
    if (progress) progress.style.width = ((i) / (slides.length - 1) * 100) + '%';
    if (slideNum) slideNum.textContent = (i + 1) + ' / ' + slides.length;
    if (location.hash !== '#' + (i + 1)) history.replaceState(null, '', '#' + (i + 1));
    document.title = 'AATF AI Workshop — Slide ' + (i + 1);
  }

  function next() {
    const frags = fragsOf(slides[i]);
    if (frag < frags.length) { frag++; render(); return; }
    if (i < slides.length - 1) { i++; frag = fragsOf(slides[i]).length ? 0 : 0; render(); }
  }
  function prev() {
    if (frag > 0) { frag--; render(); return; }
    if (i > 0) { i--; frag = fragsOf(slides[i]).length; render(); }
  }
  function go(n) { i = Math.max(0, Math.min(slides.length - 1, n)); frag = 0; render(); }

  document.addEventListener('keydown', (e) => {
    if (['ArrowRight', 'PageDown', ' '].includes(e.key)) { e.preventDefault(); next(); }
    else if (['ArrowLeft', 'PageUp'].includes(e.key)) { e.preventDefault(); prev(); }
    else if (e.key === 'Home') go(0);
    else if (e.key === 'End') go(slides.length - 1);
    else if (e.key === 'f' || e.key === 'F') { document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen(); }
    else if (e.key === 't' || e.key === 'T') { toggleTheme(); }
    else if (/^[0-9]$/.test(e.key)) { /* number jump buffered */ jumpBuffer(e.key); }
  });

  let jb = '', jt;
  function jumpBuffer(d) { jb += d; clearTimeout(jt); jt = setTimeout(() => { go(parseInt(jb, 10) - 1); jb = ''; }, 500); }

  // touch
  let x0 = null;
  document.addEventListener('touchstart', e => x0 = e.touches[0].clientX, { passive: true });
  document.addEventListener('touchend', e => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 50) (dx < 0 ? next() : prev());
    x0 = null;
  }, { passive: true });

  // nav buttons
  const nav = document.querySelector('.deck-nav');
  if (nav) {
    nav.querySelector('[data-prev]')?.addEventListener('click', prev);
    nav.querySelector('[data-next]')?.addEventListener('click', next);
    nav.querySelector('[data-theme]')?.addEventListener('click', toggleTheme);
  }

  function toggleTheme() {
    const root = document.documentElement;
    const cur = root.getAttribute('data-theme');
    const nextT = cur === 'dark' ? 'light' : (cur === 'light' ? 'dark' : (matchMedia('(prefers-color-scheme: dark)').matches ? 'light' : 'dark'));
    root.setAttribute('data-theme', nextT);
    try { localStorage.setItem('aatf-theme', nextT); } catch (e) {}
  }
  try { const t = localStorage.getItem('aatf-theme'); if (t) document.documentElement.setAttribute('data-theme', t); } catch (e) {}

  // deep link
  const h = parseInt((location.hash || '').replace('#', ''), 10);
  if (h) i = Math.max(0, Math.min(slides.length - 1, h - 1));
  render();
})();
