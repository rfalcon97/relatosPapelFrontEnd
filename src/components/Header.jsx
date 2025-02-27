import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import "./../styles/Header.css";
import imgAvatar from "../assets/avatar.png";

export const Header = () => {
  const navigate = useNavigate();
  const handleViewCart = () => {
    navigate(`/car`);
  };
  const handleGoHome = () => {
    navigate(`/home`); // Redirige al home
  };

  const handleGoLogin = () => {
    navigate(`/login`); // Redirige al login
  };
  const { totalItems } = useCart(); // Obtiene el total de productos del carrito

  // Mock de usuario
  const user = {
    name: "Ricardo Falcón",
  };
  return (
    <header className="header">
      <div className="header-left">
        <button className="header-home-button" onClick={handleGoHome}>
          Relatos de Papel
        </button>
      </div>
      <div className="header-right">
        <div className="user-info">
          <img src={imgAvatar} alt="Avatar" className="user-avatar" />
          <span className="user-name">{user.name}</span>
        </div>
{/*         <button className="header-icon" onClick={handleViewCart}>
          🛒 <span className="cart-count">{totalItems}</span>
        </button> */}
        <button className="header-icon" onClick={handleGoLogin}>
          🔒
        </button>
      </div>
    </header>
  );
};
