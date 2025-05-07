// Toggle menu
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  navMenu.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
    navMenu.classList.remove('active');
  }
});
