document.addEventListener("DOMContentLoaded", () => {
  fetch('movies.json')
    .then(res => res.json())
    .then(data => {
      loadSlider(data.latest, document.getElementById("movie-slider"));
      loadCategory(data.categories);
      loadSection("latest", data.latest);
      loadSection("bangla", data.bangla);
      loadSection("hindi", data.hindi);
      loadSection("hollywood", data.hollywood);
      loadSection("bangla-dubbed", data.banglaDubbed);
      loadSection("anime", data.anime);
    });
});

function loadSlider(movies, container) {
  movies.forEach(movie => {
    const slide = document.createElement("div");
    slide.classList.add("slide");
    slide.innerHTML = `
      <a href="#"><img src="${movie.img}" alt="${movie.title}" /></a>
      <span>${movie.title}</span>
    `;
    container.appendChild(slide);
  });

  setInterval(() => {
    container.scrollLeft += 1;
    if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
      container.scrollLeft = 0;
    }
  }, 50);
}

function loadCategory(categories) {
  const section = document.getElementById("categories");
  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.textContent = cat;
    section.appendChild(btn);
  });
}

function loadSection(id, movies) {
  const container = document.querySelector(`#${id} .movies`);
  movies.forEach(movie => {
    const div = document.createElement("div");
    div.innerHTML = `<a href="#"><img src="${movie.img}" alt="${movie.title}" /></a>`;
    container.appendChild(div);
  });
}
