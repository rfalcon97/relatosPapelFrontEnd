import React, { createContext, useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// Crear el contexto de sesión
const SessionContext = createContext();

// Provider para el contexto de sesión
export const SessionProvider = ({ children }) => {
  const navigate = useNavigate();
  const timerRef = useRef(null);

  const resetTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);

    // Reiniciar el temporizador para redirigir al login después de 5 segundos
    timerRef.current = setTimeout(() => {
      if (window.location.pathname !== "/login") {
        navigate("/login");
      }
    }, 5000); // Tiempo de inactividad (5 segundos)
  };

  useEffect(() => {
    // Configurar eventos para detectar actividad del usuario
    const handleActivity = () => resetTimer();

    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("click", handleActivity);
    window.addEventListener("keydown", handleActivity);

    // Iniciar el temporizador por primera vez
    resetTimer();

    return () => {
      // Limpiar eventos y temporizador al desmontar
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("click", handleActivity);
      window.removeEventListener("keydown", handleActivity);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [navigate]);

  return <SessionContext.Provider value={{ resetTimer }}>{children}</SessionContext.Provider>;
};

// Hook para usar el contexto de sesión
export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSession debe usarse dentro de un SessionProvider");
  }
  return context;
};
