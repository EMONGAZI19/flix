function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('show');
}

function slideRight() {
  const slider = document.getElementById('movieSlider');
  slider.scrollBy({ left: 200, behavior: 'smooth' });
}

function slideLeft() {
  const slider = document.getElementById('movieSlider');
  slider.scrollBy({ left: -200, behavior: 'smooth' });
}
