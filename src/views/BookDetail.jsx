import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { BookInfo } from "../components/BookInfo";
import { BookComments } from "../components/BookComments";
import "./../styles/BookDetail.css";
import { useCart } from "../hooks/useCart";

export const BookDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`http://localhost:8762/back-end-ms-books-catalogue/books/${id}`, {
          method: 'POST', // Cambia el método a POST
          headers: {
            'Content-Type': 'application/json' // Especifica que el contenido del cuerpo es JSON
          },
          body: JSON.stringify({
            targetMethod: "GET"
          }) // Envía en el cuerpo el método objetivo como JSON
        });
        if (!response.ok) {
          throw new Error('Failed to fetch the book details.');
        }
        const data = await response.json();
        setBook(data);
      } catch (err) {
        setError('Failed to fetch book details: ' + err.message);
      }
    };

    fetchBook();
  }, [id]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!book) {
    return <p>Cargando...</p>; // Muestra un mensaje mientras carga los datos
  }

  return (
    <div>
      <Header />
      <div className="book-detail">
        <div className="book-detail-main">
          <BookInfo
            book={book}
            onAddToCart={() => addToCart(book)}
          />
        </div>
        <div className="book-comments-section">
          <BookComments comments={book.comentarios || []} />
        </div>
      </div>
    </div>
  );
};
