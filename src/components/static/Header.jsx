import { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../../context";

const Header = () => {
  const data = useContext(UserContext);
  const { userCurrent, logout } = data;
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();
  let location = useLocation();

  const logoutSession = () => {
    sessionStorage.clear();
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-dark bg-dark sticky-top py-2 px-4 mt-4 rounded">
      <span className="navbar-brand">
        {token ? (
          <h2>
            Las Pelis de <span style={{ color: "orange" }}>{userCurrent}</span>
          </h2>
        ) : (
          <h2>
            Bienvenid@ a <span style={{ color: "orange" }}>Tus Pelis.com</span>
          </h2>
        )}
      </span>
      {token && (
        <div className="d-flex justify-content-end">
          {location.pathname === "/mylistmovies" ? (
            <button className="btn btn-outline-primary btn-sm me-3">
              <Link to="/listmovies">Volver</Link>
            </button>
          ) : (
            <button className="btn btn-outline-primary btn-sm me-3">
              <Link to="/mylistmovies">Mi Listado</Link>
            </button>
          )}

          <button
            className="btn btn-outline-danger btn-sm"
            onClick={logoutSession}
          >
            Cerrar Sesión
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
