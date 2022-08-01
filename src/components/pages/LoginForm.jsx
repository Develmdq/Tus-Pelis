import { useContext, useState } from "react";
import axios from "axios";
import styled from "../../style/styled.module.css";
import { AlertEmpty, AlertFormat, AlertInvalid, AlertSuccess } from "../Alert";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context";

const LoginForm = () => {
  const [viewPass, setViewPass] = useState(false);
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const nameUser = e.target.nameUser.value;
    const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
      email
    );

    if (email === "" || password === "" || nameUser === "") return AlertEmpty();
    if (!regexEmail) return AlertFormat();

    axios
      .post("http://challenge-react.alkemy.org", { email, password })
      .then((res) => {
        AlertSuccess();
        sessionStorage.setItem("token", res.data.token);
        sessionStorage.setItem("user", nameUser);
        login(nameUser);
        setTimeout(() => {
          navigate("/listmovies");
        }, 1500);
      })
      .catch((error) => AlertInvalid(error.response.data.error));
  };

  return (
    <>
      <div className={styled.containerForm}>
        <div className={styled.containerTitle}>
          <h2 className={styled.title}>Inicio de Sesión</h2>
        </div>
        <form className={styled.form} onSubmit={handleSubmit}>
          <label className={styled.label}>
            <span className={styled.textInput}>Nombre</span>
            <input
              className={styled.input}
              name="nameUser"
              placeholder="Tu nombre"
            />
          </label>
          <label className={styled.label}>
            <span className={styled.textInput}>
              Correo
              <br /> Electrónico
            </span>
            <input
              className={styled.input}
              name="email"
              placeholder="name@example.com"
            />
          </label>
          <label className={styled.label}>
            <span className={styled.textInput}>Contraseña</span>
            <input
              className={styled.input}
              type={viewPass ? "text" : "password"}
              name="password"
              placeholder="*******"
            />
            <i
              className={`bi bi-eye-fill ${styled.inputIcon}`}
              onClick={() => setViewPass(!viewPass)}
            ></i>
          </label>
          <button className={styled.btn} type="submit">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
