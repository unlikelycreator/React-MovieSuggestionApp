import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
  const [movieId, setmovieId] = useState(1)
  const [title, settitle] = useState('movie-name')
  const [description, setdescription] = useState('movie-description')
  const [poster, setposter] = useState('movie-poster')
  const [release, setrelease] = useState('release-date')
  const base_url = "https://api.themoviedb.org/3/movie/"
  const api_key = "?api_key=feb0ff6395b9432ddf74b751de31a3a5"
  const movie_url = base_url + movieId + api_key;
  const pickId = (min, max) =>{
    min = Math.ceil(1);
    max = Math.floor(50000);
    setmovieId(Math.floor(Math.random() * (max - min) + min));
    axios.get(movie_url)
    .then(response =>{
      console.log(response.data)
      settitle(response.data.original_title)
      setdescription(response.data.overview)
      const image_path = response.data.poster_path
      const image_url = "https://image.tmdb.org/t/p/w500" + image_path + "?api_key=feb0ff6395b9432ddf74b751de31a3a5"
      setposter(image_url)
      setrelease(response.data.release_date)
      console.log(title, description)
    });
  }

  
  return (
    <div className="App" >
      <header className="header">
        <div className="logo">
          <h2>SuggestMeMovies</h2>
        </div>
        <button className="btn" onClick={pickId}>Get Movie</button>
      </header>
      <div className="movie">
        <div className="moviePoster">
          <img className="poster" src={poster} alt="poster"/>
        </div>
        <div className="movieinfo">
          <h1 className="movieTitle">{title}</h1>
          <h4 className="release">{release}</h4>
          <p className="moviedesc">{description}</p>
        </div>
        <p className="warning">Repress Button if nothing happens!</p>
      </div>
      <a className="github" href="https://github.com/unlikelycreator/React-MovieSuggestionApp">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
      </a>
     
    </div>
  );
}

export default App;
