function loadMovies(category) {
  const movieContainer = document.getElementById(category);
  movieContainer.innerHTML = '';

  // Get the movies based on category
  const moviesCategory = movies[category];
  
  for (let i = 0; i < Math.min(moviesCategory.length, 12); i++) {
    const movie = moviesCategory[i];
    
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');
    
    const movieImage = document.createElement('img');
    movieImage.src = movie.image;
    movieImage.alt = movie.title;
    
    const movieTitle = document.createElement('h3');
    movieTitle.textContent = movie.title;
    
    movieCard.appendChild(movieImage);
    movieCard.appendChild(movieTitle);
    
    movieContainer.appendChild(movieCard);
  }
}

function showAll(category) {
  const movieContainer = document.getElementById(category);
  movieContainer.innerHTML = '';

  const moviesCategory = movies[category];
  
  moviesCategory.forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');
    
    const movieImage = document.createElement('img');
    movieImage.src = movie.image;
    movieImage.alt = movie.title;
    
    const movieTitle = document.createElement('h3');
    movieTitle.textContent = movie.title;
    
    movieCard.appendChild(movieImage);
    movieCard.appendChild(movieTitle);
    
    movieContainer.appendChild(movieCard);
  });
}

// Load the first 12 movies for each category
loadMovies('latestMovies');
loadMovies('bang
