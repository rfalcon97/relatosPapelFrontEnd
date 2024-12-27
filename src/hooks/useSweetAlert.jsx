import Swal from "sweetalert2";

const useSweetAlert = () => {
  // Mostrar mensaje de éxito
  const showSuccess = (title, text) => {
    return Swal.fire({
      title: title || "¡Éxito!",
      text: text || "La operación se realizó correctamente.",
      icon: "success",
      confirmButtonText: "OK",
    }); // Retorna una promesa
  };

  // Mostrar mensaje de error
  const showError = (title, text) => {
    return Swal.fire({
      title: title || "Error",
      text: text || "Algo salió mal. Por favor, inténtalo de nuevo.",
      icon: "error",
      confirmButtonText: "OK",
    });
  };

  // Mostrar mensaje de información
  const showInfo = (title, text) => {
    return Swal.fire({
      title: title || "Información",
      text: text || "Aquí tienes más detalles.",
      icon: "info",
      confirmButtonText: "OK",
    });
  };

  // Mostrar mensaje de advertencia
  const showWarning = (title, text) => {
    return Swal.fire({
      title: title || "Advertencia",
      text: text || "Revisa esta información antes de continuar.",
      icon: "warning",
      confirmButtonText: "OK",
    });
  };

  // Retornar las funciones para que puedan ser usadas
  return {
    showSuccess,
    showError,
    showInfo,
    showWarning,
  };
};

export default useSweetAlert;
