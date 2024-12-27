import React from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/NotFoundView.css";

const NotFoundView = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/login");
  };

  return (
    <div className="not-found-container">
      <h1>404</h1>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <button onClick={goHome} className="back-home-button">
        Volver al Inicio
      </button>
    </div>
  );
};

export default NotFoundView;
