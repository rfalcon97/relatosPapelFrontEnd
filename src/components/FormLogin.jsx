import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/FormLogin.css";

export const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Para manejar errores
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Evitar el comportamiento predeterminado del formulario

    if (!email || !password) {
      setError("Ambos campos son requeridos");
    } else {
      setError(""); // Limpia el mensaje de error si los campos están llenos
      navigate("/home");
    }
  };

  return (
    <div className="login-form">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            placeholder="Ingresa tu correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Actualiza el estado
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Actualiza el estado
          />
        </div>
        {error && <p className="error-message">{error}</p>} {/* Muestra el error */}
        <button type="submit" className="login-button">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};
