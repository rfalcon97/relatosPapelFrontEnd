import "./../styles/BookInfo.css";
import useSweetAlert from "./../hooks/useSweetAlert";
export const BookInfo = ({ book, onAddToCart }) => {
  const { showSuccess } = useSweetAlert(); // Importar función de éxito
  const handleAddToCart = () => {
    onAddToCart(); // Llama a la función para agregar al carrito
    showSuccess(
      "¡Agregado al carrito!",
      `"${book.title}" ha sido añadido exitosamente.`
    );
  };
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
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Añadir al Carrito
        </button>
      </div>
    </div>
  );
};
