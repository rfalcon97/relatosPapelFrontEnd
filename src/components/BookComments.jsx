import "./../styles/BookComments.css";

export const BookComments = ({ comments }) => {
  return (
    <div className="book-comments">
      <h3>Comentarios</h3>
      {comments.length > 0 ? (
        <ul className="comments-list">
          {comments.map((comment) => (
            <li key={comment.id} className="comment-item">
              <div className="comment-header">
                <div className="user-avatar">{comment.usuario[0]}</div>
                <div>
                  <p className="user-name">{comment.usuario}</p>
                  <p className="comment-date">{comment.fecha || "Sin fecha"}</p>
                </div>
              </div>
              <div className="comment-body">
                <div className="comment-rating">⭐⭐⭐⭐⭐</div>
                <p>{comment.comentario}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay comentarios disponibles para este libro.</p>
      )}
    </div>
  );
};
