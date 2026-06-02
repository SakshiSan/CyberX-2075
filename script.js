const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle?.addEventListener('click', () => {
  navLinks?.classList.toggle('active');
});

const heroSection = document.querySelector('.hero-section');
const updateHero = () => {
  if (!heroSection) return;
  const offset = window.scrollY * 0.12;
  heroSection.style.backgroundPosition = `center calc(50% + ${offset}px)`;
};

window.addEventListener('scroll', updateHero);

const links = document.querySelectorAll('a[href^="#"]');
links.forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = event.currentTarget;
    const href = target.getAttribute('href');
    if (!href || href === '#') return;
    const destination = document.querySelector(href);
    if (destination) {
      event.preventDefault();
      destination.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
