import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/UseCart";
import "./../styles/Header.css";

export const Header = () => {
  const navigate = useNavigate(); 
  const handleViewCart = () => {
    navigate(`/car`);
  };
  const handleGoHome = () => {
    navigate(`/home`); // Redirige al home
  };
  const { totalItems } = useCart(); // Obtiene el total de productos del carrito
  return (
    <header className="header">
    <div className="header-left">
      <button className="header-home-button" onClick={handleGoHome}>
        Relatos de Papel
      </button>
    </div>
    <div className="header-right">
      <button className="header-icon" onClick={handleViewCart}>
        🛒 <span className="cart-count">{totalItems}</span>
      </button>
      <button className="header-icon">🔒</button>
    </div>
  </header>
  );
};
