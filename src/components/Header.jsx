import "./../styles/Header.css";

export const Header = () => {
  return (
    <header className="header">
    <div className="header-left">
    
      <h2>Relatos de Papel</h2>
    </div>
    <div className="header-right">
      <button className="header-icon">🛒</button> {/* Icono de carrito */}
      <button className="header-icon">🔒</button> {/* Icono de cerrar sesión */}
    </div>
  </header>
  );
};
