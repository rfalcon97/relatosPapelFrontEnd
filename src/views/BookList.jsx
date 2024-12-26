import { useState } from "react";
import { Book } from "../components/Book";
import { Header } from "../components/Header";
import "./../styles/BookList.css";
import { booksDataBase } from "../database/book";

export const BookList = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Estado para la barra de búsqueda
  const books = booksDataBase; // Base de datos de libros

  // Filtrar los libros según el término de búsqueda
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <Header />
      <div className="book-list-container">
        <div>
          <h1>¡Bienvenido a Relatos de Papel!</h1>
          <p>
            En nuestra librería encontrarás una gran selección de libros de
            diferentes géneros y autores.
          </p>
        </div>
        <div>
          {/* Barra de búsqueda */}
          <input
            type="text"
            placeholder="Buscar libros por título..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-bar"
          />
        </div>
        <h1>Libros Disponibles</h1>
        <div className="book-list">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <Book
                key={book.id}
                id={book.id}
                title={book.title}
                author={book.author}
                price={book.price}
                image={book.image}
                rating={book.rating}
              />
            ))
          ) : (
            <p className="no-books-message">
              No se encontraron libros que coincidan con la búsqueda.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
