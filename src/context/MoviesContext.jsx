import { createContext, useEffect, useState } from 'react'
import axios from 'axios'

const MoviesContext = createContext()

const apiKey = process.env.REACT_APP_API_KEY;
const url =
  `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([])
  let token = sessionStorage.getItem("token");


    useEffect(() => {
    if (token) {
      axios(url)
        .then((resp) => setMovies(resp.data.results))
        .catch((error) => console.log(error));
    }return
  }, [token]);
    
 
  return (
    <MoviesContext.Provider value={movies}>{children}</MoviesContext.Provider>
  );
}

export { MoviesContext, MovieProvider };
