import { useEffect, useState } from "react";
import MyListComponent from "../MyListComponent";
import axios from "axios";

const MyList = () => {
  const [token, setToken] = useState({});
  const [session, setSession] = useState({});
  const [movies, setMovies] = useState([]);

  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

  const urlToken = `https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}`;
  const urlSession = `https://api.themoviedb.org/3/authentication/session/new?api_key=${apiKey}`;

  const requestToken = { "access_token": token };
 
  console.log(session);

  useEffect(() => {
    // axios(urlToken)
    //   .then((resp) => setToken(resp.data.request_token))
    //   .then(
    //     axios
    //       .post(urlSession, requestToken)
    //       .then((resp) => setSession(resp.data.session_id))
    //   )
    //   .catch((error) => console.log(error));
  }, []);

  return (
    <div className="row">
      {movies.map((movie) => (
        <div className="col-6" key={movie.id}>
          <MyListComponent movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MyList;
