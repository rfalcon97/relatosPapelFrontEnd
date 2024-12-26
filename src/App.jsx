import "./App.css";
import { Footer } from "./components/Footer";
import { CartProvider } from "./hooks/UseCart";

import { AppRouter } from "./router/AppRouter";

function App() {
  return (

    <CartProvider>
      <AppRouter />
      <Footer />
    </CartProvider>
  );
}

export default App;
