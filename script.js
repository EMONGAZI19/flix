// Menu toggle
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

// Search filter
const searchInput = document.getElementById('movieSearch');
const movies = document.querySelectorAll('.movie');

searchInput.addEventListener('input', () => {
  const text = searchInput.value.toLowerCase();
  movies.forEach(movie => {
    const name = movie.textContent.toLowerCase();
    movie.style.display = name.includes(text) ? 'block' : 'none';
  });
});
