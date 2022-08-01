import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { MoviesContext, UserContext } from "../../context/";
import MovieComponent from "../MovieComponent";

const ListMovies = () => {
  const movies = useContext(MoviesContext);
  const { userCurrent } = useContext(UserContext);
  
  return (
    <>
      {!userCurrent && <Navigate to="/" replace={true} />}
      <div className="row">
        {movies.map((movie) => (
          <div className="col-3" key={movie.id}>
            <MovieComponent movie={movie} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ListMovies;
