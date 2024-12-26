import "./../styles/Header.css";

export const Header = ({ cartCount }) => {
  return (
    <header className="header">
    <div className="header-left">
    
      <h2>Relatos de Papel</h2>
    </div>
    <div className="header-right">
      <button className="header-icon">
       🛒 <span className="cart-count">{cartCount}</span>
        </button> {/* Icono de carrito */}
      <button className="header-icon">🔒</button> {/* Icono de cerrar sesión */}
    </div>
  </header>
  );
};
