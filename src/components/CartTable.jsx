import React from "react";
import "./../styles/CartTable.css";

const CartTable = ({ cart, addToCart, decrementQuantity, removeFromCart }) => {
  return (
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
            <td>${item.price.toFixed(2)}</td>
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
  );
};

export default CartTable;
