import { useContext, useState, useEffect, createContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Recuperar el carrito del localStorage
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    // Guardar el carrito en el localStorage cada vez que cambie
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Agregar un producto al carrito o incrementar su cantidad
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        // Incrementar la cantidad si el producto ya existe
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Agregar nuevo producto con cantidad inicial 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Eliminar un producto completamente del carrito
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Reducir la cantidad de un producto en el carrito
  const decrementQuantity = (productId) => {
    setCart(
      (prevCart) =>
        prevCart
          .map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0) // Eliminar productos con cantidad 0
    );
  };

  // Vaciar el carrito
  const clearCart = () => {
    setCart([]);
  };

  // Calcular el número total de productos (sumar cantidades)
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Calcular el precio total del carrito
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        decrementQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
};
