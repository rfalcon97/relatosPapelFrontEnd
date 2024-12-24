import "./../styles/Book.css";
export const Book = ({ title, author, price, image, rating }) => {
  return (
    <div className="book">
      <img src={image} alt={title} className="book-image" />
      <div className="book-details">
        <h3 className="book-title">{title}</h3>
        <p className="book-author">
          {" "}
          <strong>Autor:</strong> {author}
        </p>
        <p className="book-price">${price}</p>
        <p className="book-rating">{rating}🌟</p>
        <button className="book-button">Comprar</button>
      </div>
    </div>
  );
};
