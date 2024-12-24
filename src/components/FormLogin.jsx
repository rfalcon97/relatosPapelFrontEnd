import { useNavigate } from "react-router-dom";
import "./../styles/FormLogin.css";

export const FormLogin = () => {
  const navigate = useNavigate();
  return (
    <div className="login-form">
      <h2>Iniciar Sesión</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" placeholder="Ingresa tu correo" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            placeholder="Ingresa tu contraseña"
          />
        </div>
        <button
          type="submit"
          className="login-button"
          onClick={() => navigate("/home")}
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};
