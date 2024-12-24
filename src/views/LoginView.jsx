import { FormLogin } from "../components/FormLogin";
import "./../styles/LoginView.css";
import imgLogin from "../assets/img_login.png";


export const LoginView = () => {
    
  return (
    <div className="login-page">
      <div className="login-left">
        <img
          src={imgLogin} // Reemplaza esta URL con tu imagen de logo
          alt="Logo"
          className="logo-image"
        />
      </div>
      <div className="login-right">
        <FormLogin /> {/* Incluye el componente del formulario */}
      </div>
    </div>
  );
};
