import { useNavigate } from "react-router-dom";
import "./../styles/Book.css";
export const Book = ({ id, title, author, price, image, rating }) => {
  const navigate = useNavigate(); 
  const handleViewDetails = () => {
    navigate(`/book/${id}`);
  };
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
        <button className="book-button" onClick={handleViewDetails}>Comprar</button>
      </div>
    </div>
  );
};
