import React, { useState } from "react";
import "./../styles/PaymentForm.css";

const PaymentForm = ({ totalPrice, onPaymentSuccess }) => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    cardHolder: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePayment = (e) => {
    e.preventDefault();

    // Validar los campos
    if (
      !formData.cardNumber ||
      !formData.expirationDate ||
      !formData.cvv ||
      !formData.cardHolder
    ) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Llamar al evento de éxito en el componente padre
    onPaymentSuccess();
  };

  return (
    <div className="payment-form-container">
      <h2>Pago con Tarjeta</h2>
      <form onSubmit={handlePayment}>
        <div>
          <label>Número de Tarjeta:</label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
            onInput={(e) =>
              (e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 16))
            }
            maxLength="16"
            required
          />
        </div>
        <div>
          <label>Fecha de Expiración:</label>
          <input
            type="month"
            name="expirationDate"
            value={formData.expirationDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>CVV:</label>
          <input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleInputChange}
            onInput={(e) =>
              (e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 4))
            }
            maxLength="4"
            required
          />
        </div>
        <div>
          <label>Nombre del Titular:</label>
          <input
            type="text"
            name="cardHolder"
            value={formData.cardHolder}
            onChange={handleInputChange}
            onInput={(e) =>
              (e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, ""))
            }
            required
          />
        </div>
        <button type="submit" className="pay-button">
          Pagar ${totalPrice.toFixed(2)}
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
