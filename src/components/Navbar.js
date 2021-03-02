import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

export const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className='navbar'>
      <h1>Iva's reading list</h1>
      <p>Currently I have {books.length} books to get through...</p>
    </div>
  );
};
