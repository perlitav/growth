// Scroll reveal con IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));

// Stagger automático para listas con data-stagger
document.querySelectorAll('[data-stagger]').forEach(list => {
  list.querySelectorAll('li, .dato, .ruta, .alojamiento-foto').forEach((child, i) => {
    child.setAttribute('data-reveal', '');
    child.style.transitionDelay = `${i * 0.1}s`;
    observer.observe(child);
  });
});


