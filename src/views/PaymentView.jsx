import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader"; // Importa el loader
import CartTable from "../components/CartTable";
import PaymentForm from "../components/PaymentForm";
import "./../styles/PaymentView.css";
import { useCart } from "../hooks/UseCart";
import { Header } from "../components/Header";
import useSweetAlert from "../hooks/useSweetAlert"; // Importa el hook de SweetAlert

const PaymentView = () => {
  const { cart, clearCart, totalPrice } = useCart();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false); // Estado para controlar el loading
  const { showSuccess } = useSweetAlert(); 

  const handlePaymentSuccess = () => {
    setIsLoading(true); // Mostrar el loading
    setTimeout(() => {
      setIsLoading(false); // Ocultar el loading después de 3 segundos
      showSuccess("¡Pago Exitoso!", "Tu pago se realizó correctamente.")
        .then(() => {
          clearCart(); // Vaciar el carrito
          navigate("/home"); // Redirigir al home
        });
    }, 3000); // Simular 3 segundos de procesamiento
  };

  return (
    <div>
      <Header />
      <div className="payment-view-container">
        {isLoading ? ( // Mostrar el overlay si está procesando
          <div className="loading-overlay">
            <ClipLoader color="#ffffff" size={60} />
            <p>Procesando el pago, por favor espera...</p>
          </div>
        ) : (
          <>
            <PaymentForm
              totalPrice={totalPrice}
              onPaymentSuccess={handlePaymentSuccess}
            />
            <div className="cart-summary-container">
              <CartTable
                cart={cart}
                addToCart={() => {}} // Desactivamos esta funcionalidad aquí
                decrementQuantity={() => {}} // Desactivamos esta funcionalidad aquí
                removeFromCart={() => {}} // Desactivamos esta funcionalidad aquí
              />
              <div className="total-payment-container">
                <p>Total a Pagar:</p>
                <span className="total-payment-amount">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentView;
