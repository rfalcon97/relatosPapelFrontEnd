import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { LoginView } from "../views/LoginView";
import { BookList } from "../views/BookList";
import { BookDetail } from "../views/BookDetail";
import CartView from "../views/CartView";
import PaymentView from "../views/PaymentView";
import { SessionProvider } from "../hooks/useSession";
import NotFoundView from "../views/NotFoundView";

export const AppRouter = () => {
  return (
    <Router>
      <SessionProvider>
        {" "}
        {/* Mover SessionProvider aquí */}
        <Routes>
          {/* Ruta para el Login */}
          <Route path="/login" element={<LoginView />} />

          {/* Ruta para la lista de libros */}
          <Route path="/home" element={<BookList />} />

          <Route path="/book/:id" element={<BookDetail />} />

          <Route path="/car" element={<CartView />} />

          <Route path="/payment" element={<PaymentView />} />

          {/* Redirige cualquier ruta no encontrada a /login */}
          <Route path="*" element={<NotFoundView />} /> {/* Página no encontrada */}
        </Routes>
      </SessionProvider>
    </Router>
  );
};
