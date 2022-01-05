const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=51e7f482c59d7c2bf038c537bdf52710&page=1'
const IMG_PATH = "https://image.tmdb.org/t/p/w1280"
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=51e7f482c59d7c2bf038c537bdf52710&query="'

const search_form = document.querySelector('#form')
const search_input = document.querySelector('#search')
const main = document.querySelector('#main')


//Get most popular movies
getMovies(API_URL)

async function getMovies(url) {
  const res = await fetch(url)
  const data = await res.json()

  showMovies(data.results)
}

//add movies to the dom
function showMovies(movies){
  main.innerHTML = '';

  movies.forEach(movie => {
    const {title, poster_path, vote_average, overview } = movie

    const movieEl = document.createElement('div')
    movieEl.classList.add('movie')

    movieEl.innerHTML = `
    <img
    src="${IMG_PATH + poster_path}"
    alt="${title}"/>
    <div class="movie-info">
      <h3>${title}</h3>
      <span class="${getClassByRate(vote_average)}">${vote_average}</span>
    </div>
    <div class="overview">
      <h3>Overview</h3>
      ${overview}
    </div>
    `
    main.appendChild(movieEl);
  })
}

//rating colors
function getClassByRate(vote) {
  if(vote >= 8) {
    return 'green'
  } else if (vote >=5) {
    return 'orange'
  } else {
    return 'red'
  }
}

//Search API

search_form.addEventListener('submit', (e) => {
  e.preventDefault()

  const searchTerm = search_input.value;
  if(searchTerm && searchTerm !== '') {
    getMovies(SEARCH_URL + searchTerm)

    search.value = ''
  } else {
    window.location.reload()
  }
})


