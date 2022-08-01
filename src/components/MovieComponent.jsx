import { useState } from "react";
import Swal from "sweetalert2";

const MovieComponent = ({ movie }) => {
  const [viewDetail, setViewDetail] = useState(false);
  const [idMovie, setIdMovie] = useState([]);
  const { poster_path, title, release_date, overview,id } = movie;

  if (viewDetail) {
    Swal.fire({
      html: `${overview}`,
      confirmButtonColor: "#212529",
      confirmButtonText: "Cerrar",
    });
  }

  return (
    <div className="card mt-4 shadow-sm">
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        className="card-img-top"
        alt="foto"
        style={{ height: "500px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div className="d-flex align-items-center justify-content-between">
          <h6>{release_date}</h6>
          <div className=" d-flex align-items-center justify-content-between">
            <button
              className="btn btn-primary btn-sm w-1"
              onClick={() => setViewDetail(!viewDetail)}
            >
              <i
                className="bi bi-info-square"
                style={{ fontSize: "1rem", color: "#fff" }}
              ></i>{" "}
              Info
            </button>
            <button
              className="btn btn-danger btn-sm ms-1"
              onClick={() => setIdMovie([...idMovie, { id }])}
            >
              <i
                className="bi bi-plus-square"
                style={{ fontSize: "1rem", color: "#fff" }}
              ></i>{" "}
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieComponent;
