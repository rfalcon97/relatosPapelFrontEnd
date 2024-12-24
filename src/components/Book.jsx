import './../styles/Book.css';
export const Book = ({ title, author, price, image }) => {
  return (
    <div className="book">
      <img src={image} alt={title} className="book-image" />
      <div className="book-details">
        <h3 className="book-title">{title}</h3>
        <p className="book-author">Autor: {author}</p>
        <p className="book-price">${price}</p>
      </div>
    </div>
  );
};
