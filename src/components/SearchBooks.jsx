import { useState, useEffect, useRef } from "react";
import { buildBooks, addToFavorites } from "../helpers";
import favoriteBooks from "../models/bookList";
import Modal from "./Modal";

export default function SearchBooks() {
  const API_KEY = process.env.REACT_APP_API_KEY;

  const [bookList, setBookList] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const getBooks = async (input) => {
    const URL = "https://www.googleapis.com/books/v1/volumes?q=";
    try {
      const response = await fetch(`${URL}${input}&key=${API_KEY}`);
      const data = await response.json();
      setBookList(data.items);
    } catch (e) {
      console.error(e);
    }
  }

  const handleFavorites = (e) => {
    openModal(e);
    if (bookList) {
      const listOfBooks = buildBooks(bookList);
      const title = e.target.className.slice(10);
      addToFavorites(title, listOfBooks);
      console.log(favoriteBooks);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getBooks(searchTerm);
  };

  const handleSetTerm = (e) => {
    setSearchTerm(e.target.value);
  };


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDescription, setcurrentDescription] = useState("");

  const openModal = (e) => {
    if (e.target.innerHTML === "Add to favorites") {
      if (!favoriteBooks.some(book => book.title === e.target.className.slice(10))) {
        setcurrentDescription(["Added to favorites", ""]);
      } else setcurrentDescription(["The book is already in favorites", ""]);
    } else setcurrentDescription(["Description", e.target.value]);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div className='search-books'>
      <h1>Search Books</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input placeholder="Search a book" className="search-bar" onChange={handleSetTerm}/>
        <button type="submit" onClick={handleSubmit} className="search-button">Search</button>
      </form>
      <Modal open={isModalOpen} close={closeModal}>
          <h2>{currentDescription[0]}</h2>
          <p>{currentDescription[1]}</p>
       </Modal>
      <div className="book-list-nav">
        <ul className="book-list">
          {bookList ? bookList.map((book, index) => {
            return (
            <li className="book" key={index}>
              {book.volumeInfo && book.volumeInfo.imageLinks && (
                <>
                  <a target="_blank" href={book.volumeInfo.infoLink}>
                    <img className="book-image" src={book.volumeInfo.imageLinks.smallThumbnail} />
                  </a>
                  <a target="_blank" href={book.volumeInfo.infoLink}>
                    <h4 className="book-title">{book.volumeInfo.title}</h4>
                  </a>
                  {book.volumeInfo.averageRating ?
                  <p className="rating">{book.volumeInfo.averageRating}⭐</p> :
                  <p className="rating">No rated</p>}
                  {book.saleInfo.listPrice &&
                  <h4 className="price">${book.saleInfo.listPrice.amount}</h4>}
                </>
                )}
                <button className={`save-book_${book.volumeInfo.title}`}
                onClick={e => handleFavorites(e)}>Add to favorites</button>

                <button value={book.volumeInfo.description} className="open-modal" onClick={openModal}>
                  Description
                </button>
            </li>)
          }) : ""}
        </ul>
      </div>
    </div>
  )
}
