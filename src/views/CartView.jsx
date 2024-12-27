import { useNavigate } from "react-router-dom";
import CartTable from "../components/CartTable";
import { Header } from "../components/Header";
import { useCart } from "../hooks/useCart";
import "./../styles/CartView.css";


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

    const navigate = useNavigate(); // Hook para redirigir

  
    const handlePayment = () => {
        navigate("/payment"); // Redirige a la vista de pago
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
              <CartTable
                cart={cart}
                addToCart={addToCart}
                decrementQuantity={decrementQuantity}
                removeFromCart={removeFromCart}
              />
  
              <div className="cart-summary">
                <p>Total de productos: {totalItems}</p>
                <p className="total-price-highlight">
                  Total a pagar: ${(totalPrice).toFixed(2)}
                </p>
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