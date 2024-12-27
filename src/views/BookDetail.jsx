import { useParams } from "react-router-dom";
import { booksDataBase } from "../database/book";
import { Header } from "../components/Header";
import { BookInfo } from "../components/BookInfo";
import { BookComments } from "../components/BookComments";
import "./../styles/BookDetail.css";
import { useCart } from "../hooks/useCart";


export const BookDetail = () => {
  const { id } = useParams();
  const book = booksDataBase.find((b) => b.id === parseInt(id));

  const { addToCart } = useCart(); // Usar el custom hook

  if (!book) {
    return <p>Libro no encontrado</p>;
  }

  return (
    <div>
      <Header />
      <div className="book-detail">
       
        <div className="book-detail-main">
          {/* Pasar solo onAddToCart como prop a BookInfo */}
          <BookInfo
            book={book}
            onAddToCart={() => addToCart(book)}
          />
        </div>

        <div className="book-comments-section">
          <BookComments comments={book.comentarios} />
        </div>
      </div>
    </div>
  );
};
