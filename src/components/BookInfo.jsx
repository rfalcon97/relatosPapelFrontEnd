import "./../styles/BookInfo.css";

export const BookInfo = ({ book, onAddToCart }) => {
  return (
    <div className="book-info-container">
      {/* Imagen del libro */}
      <div className="book-info-image">
        <img src={book.image} alt={book.title} className="book-image" />
      </div>

      {/* Información del libro */}
      <div className="book-info-details">
        <h2>{book.title}</h2>
        <p>
          <strong>Autor:</strong> {book.author}
        </p>
        <p>
          <strong>Precio:</strong> ${book.price}
        </p>
        <p>
          <strong>Rating:</strong> {book.rating} 🌟
        </p>
        <p>
          <strong>Resumen:</strong> {book.summary}
        </p>

        {/* Botón para agregar al carrito */}
        <button className="add-to-cart-button" onClick={onAddToCart}>
          Añadir al Carrito
        </button>
      </div>
    </div>
  );
};
