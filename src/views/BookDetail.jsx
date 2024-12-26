import { useParams } from "react-router-dom";
import { booksDataBase } from "../database/book";
import { Header } from "../components/Header";
import { BookInfo } from "../components/BookInfo";
import { BookComments } from "../components/BookComments";
import "./../styles/BookDetail.css";
import { useState } from "react";

export const BookDetail = () => {
  const { id } = useParams();
  const book = booksDataBase.find((b) => b.id === parseInt(id));
  // Estado para el carrito
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1); // Incrementa el contador del carrito
  };

  if (!book) {
    return <p>Libro no encontrado</p>;
  }

  return (
    <div>
      <Header  cartCount={cartCount}/>
      <div className="book-detail">
        {/* Encabezado con el título del libro */}
        <h1 className="book-title">{book.title}</h1>

        {/* Contenedor principal dividido en dos columnas */}
        <div className="book-detail-main">
          {/* Componente reutilizado: BookInfo */}
          <BookInfo book={book} onAddToCart={addToCart} />
        </div>

        {/* Sección de comentarios */}
        <div className="book-comments-section">
          <BookComments comments={book.comentarios} />
        </div>
      </div>
    </div>
  );
};
