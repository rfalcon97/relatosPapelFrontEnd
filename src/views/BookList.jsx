import { useState } from "react";
import { Book } from "../components/Book";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "./../styles/BookList.css";

export const BookList = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Estado para la barra de búsqueda
  const books = [
    {
      id: 1,
      title: "El Principito",
      author: "Antoine de Saint-Exupéry",
      price: 9.99,
      image:
        "https://images.cdn3.buscalibre.com/fit-in/360x360/dd/80/dd80e5c9a9ca4f49f887cde556408253.jpg",
      rating: 4.5,
    },
    {
      id: 2,
      title: "Cien Años de Soledad",
      author: "Gabriel García Márquez",
      price: 14.99,
      image:
        "https://image.cdn0.buscalibre.com/5b59f73590f0b5ca578b4568.__RS360x360__.jpg",
      rating: 4.8,
    },
    {
      id: 3,
      title: "Don Quijote de la Mancha",
      author: "Miguel de Cervantes",
      price: 19.99,
      image:
        "https://images.cdn1.buscalibre.com/fit-in/360x360/a6/18/a618be10eae5c2a608ec6e22e6917e29.jpg",
      rating: 4.9,
    },
    {
      id: 4,
      title: "1984",
      author: "George Orwell",
      price: 13.99,
      image:
        "https://images.cdn3.buscalibre.com/fit-in/360x360/a0/4d/a04dc7b2180634d285948a7d90e1b41c.jpg",
      rating: 4.7,
    },
    {
      id: 5,
      title: "Matar a un Ruiseñor",
      author: "Harper Lee",
      price: 10.99,
      image:
        "https://images.cdn3.buscalibre.com/fit-in/360x360/c2/52/c252630912bc122be54afd1de2939bfd.jpg",
      rating: 4.6,
    },
    {
      id: 6,
      title: "Orgullo y Prejuicio",
      author: "Jane Austen",
      price: 12.99,
      image:
        "https://images.cdn2.buscalibre.com/fit-in/360x360/dd/e5/dde58c57ce2567a66cb722a51c05c883.jpg",
      rating: 4.8,
    },
    {
      id: 7,
      title: "La Odisea",
      author: "Homero",
      price: 15.99,
      image:
        "https://images.cdn3.buscalibre.com/fit-in/360x360/14/d1/14d1f77f6a55c9717b615ceed854ab8a.jpg",
      rating: 4.9,
    },
    {
      id: 8,
      title: "Crimen y Castigo",
      author: "Fiódor Dostoyevski",
      price: 18.99,
      image:
        "https://images.cdn2.buscalibre.com/fit-in/360x360/fe/3c/fe3c33a05bddebcdb615f0918b92d31a.jpg",
      rating: 4.7,
    },
    {
      id: 9,
      title: "El Gran Gatsby",
      author: "F. Scott Fitzgerald",
      price: 11.99,
      image:
        "https://images.cdn3.buscalibre.com/fit-in/360x360/e4/01/e401faaab2124ec3aeccf86467857807.jpg",
      rating: 4.6,
    },
    {
      id: 10,
      title: "El Alquimista",
      author: "Paulo Coelho",
      price: 8.99,
      image:
        "https://images.cdn3.buscalibre.com/fit-in/360x360/77/58/7758f8f120113fa7c3b164bb7a69b860.jpg",
      rating: 4.8,
    },
    /*         {
          id: 11,
          title: "Los Miserables",
          author: "Victor Hugo",
          price: 19.99,
          image: "https://via.placeholder.com/150",
        },
        {
          id: 12,
          title: "El Hobbit",
          author: "J.R.R. Tolkien",
          price: 14.99,
          image: "https://via.placeholder.com/150",
        },
        {
          id: 13,
          title: "La Divina Comedia",
          author: "Dante Alighieri",
          price: 16.99,
          image: "https://via.placeholder.com/150",
        },
        {
          id: 14,
          title: "Drácula",
          author: "Bram Stoker",
          price: 9.99,
          image: "https://via.placeholder.com/150",
        },
        {
          id: 15,
          title: "Alicia en el País de las Maravillas",
          author: "Lewis Carroll",
          price: 7.99,
          image: "https://via.placeholder.com/150",
        },
        {
          id: 16,
          title: "El Retrato de Dorian Gray",
          author: "Oscar Wilde",
          price: 12.99,
          image: "https://via.placeholder.com/150",
        },
        {
          id: 17,
          title: "Frankenstein",
          author: "Mary Shelley",
          price: 10.99,
          image: "https://via.placeholder.com/150",
        },
        {
          id: 18,
          title: "Cumbres Borrascosas",
          author: "Emily Brontë",
          price: 11.99,
          image: "https://via.placeholder.com/150",
        },
        {
          id: 19,
          title: "Los Juegos del Hambre",
          author: "Suzanne Collins",
          price: 13.99,
          image: "https://via.placeholder.com/150",
        },
        {
          id: 20,
          title: "El Señor de los Anillos",
          author: "J.R.R. Tolkien",
          price: 19.99,
          image: "https://via.placeholder.com/150",
        }, */
  ];

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
          {filteredBooks.map((book) => (
            <Book
              key={book.id}
              title={book.title}
              author={book.author}
              price={book.price}
              image={book.image}
              rating={book.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
