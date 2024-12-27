import React from "react";
import { useNavigate } from "react-router-dom";

import CartTable from "../components/CartTable";
import PaymentForm from "../components/PaymentForm";
import "./../styles/PaymentView.css";
import { useCart } from "../hooks/UseCart";
import { Header } from "../components/Header";

const PaymentView = () => {
  const { cart, clearCart, totalPrice } = useCart();
  const navigate = useNavigate();

  const handlePaymentSuccess = () => {
    clearCart(); // Vaciar el carrito
    navigate("/home"); // Redirigir al home
  };

  return (
    <div>
      <Header />
      <div className="payment-view-container">
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
            <span className="total-payment-amount">${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentView;
