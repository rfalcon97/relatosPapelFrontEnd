import { useState, useEffect } from 'react';
import { Book } from '../components/Book';
import { Header } from '../components/Header';
import './../styles/BookList.css';

export const BookList = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

// Función para cargar todos los libros con reintentos
const fetchAllBooks = async () => {
  setLoading(true);
  let attempts = 5;  // Número máximo de intentos

  for (let i = 0; i < attempts; i++) {
    try {
      const response = await fetch('https://gateway-production-998f.up.railway.app/back-end-ms-books-catalogue/publications', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ targetMethod: "GET" , queryParams:{}})
      });

      console.log(response, 'la respuesta'); // Log de la respuesta
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setBooks(data);
      return; // Si todo sale bien, salir del bucle y de la función
    } catch (error) {
      if (i === attempts - 1) {
        setError('Failed to fetch all books after several attempts: ' + error.message); // Se configura el error después del último intento
      } else {
        console.error('Attempt ' + (i + 1) + ' failed: ' + error.message); // Log del error en cada intento fallido
      }
    }
  }

  setLoading(false); // Asegurarse de que setLoading se llama solo una vez al final
};

  // Efecto para cargar libros cuando el componente se monta y cuando se limpia el campo de búsqueda
  useEffect(() => {
    fetchAllBooks();
  }, []);

  // Efecto para manejar la búsqueda
  useEffect(() => {
    if (searchTerm.trim()) {
      handleSearch();
    } else {
      fetchAllBooks(); // Vuelve a cargar todos los libros si se limpia el campo de búsqueda
    }
  }, [searchTerm]);

  // Función para manejar la búsqueda
  const handleSearch = async () => {
    setLoading(true);
    const urls = 'https://gateway-production-998f.up.railway.app/back-end-ms-books-catalogue/publications';
    const requests = [
      fetch(urls, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          targetMethod: "GET",
          queryParams: { title: [searchTerm] }
        })
      }),
       fetch(urls, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          targetMethod: "GET",
          queryParams: { isbn: [searchTerm] }
        })
      }), 
      fetch(urls, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          targetMethod: "GET",
          queryParams: { authorValues: [searchTerm] }
        })
      })
    ];

    try {
      const responses = await Promise.all(requests);
      const booksArray = await Promise.all(responses.map(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      }));

      // Combina todos los libros en un solo array y elimina duplicados
      const combinedBooks = Array.from(new Set(booksArray.flat().map(book => JSON.stringify(book)))).map(str => JSON.parse(str));
      setBooks(combinedBooks);
    } catch (error) {
      setError('Failed to fetch books: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <div className="book-list-container">
        <div>
          <h1>¡Bienvenido a Relatos de Papel!</h1>
          <p>En nuestra librería encontrarás una gran selección de libros de diferentes géneros y autores.</p>
        </div>
        <div>
          <input
            type="text"
            placeholder="Buscar libros por título, autor o ISBN"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-bar"
          />
        </div>
        {loading ? (
          <p>Cargando libros...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <>
            <h1>Libros Disponibles</h1>
            <div className="book-list">
              {books.length > 0 ? (
                books.map(book => (
                  <Book
                    key={book.id}
                    {...book}
                  />
                ))
              ) : (
                <p className="no-books-message">No se encontraron libros que coincidan con la búsqueda.</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
