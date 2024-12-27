import React from "react";
import "./../styles/CartView.css";
import { useCart } from "../hooks/UseCart";
import { Header } from "../components/Header";

const CartView = () => {
  const {
    cart,
    addToCart,
    decrementQuantity,
    removeFromCart,
    clearCart,
    totalItems,
    totalPrice,
  } = useCart();

  const handlePayment = () => {
    alert("Redirigiendo a la página de pago...");
  };

  return (
    <div>
      <Header />
      <div className="cart-view-container">
        <h1>Carrito de Compras</h1>

        {/* Verificar si el carrito está vacío */}
        {cart.length === 0 ? (
          <p>Tu carrito está vacío. ¡Agrega algunos libros!</p>
        ) : (
          <>
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Total</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>${item.price}</td>
                    <td>
                      <div className="quantity-controls">
                        <button
                          onClick={() => decrementQuantity(item.id)}
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => addToCart(item)}>+</button>
                      </div>
                    </td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <button
                        className="remove-button"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="cart-summary">
              <p>Total de productos: {totalItems}</p>
              <p className="total-price-highlight">Total a pagar: ${(totalPrice).toFixed(2)}</p>
              <div className="cart-actions">
                <button className="clear-cart-button" onClick={clearCart}>
                  Vaciar Carrito
                </button>
                <button className="pay-button" onClick={handlePayment}>
                  Pagar
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartView;
