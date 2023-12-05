import { useState, useEffect } from "react";
import buildBooks from "../helpers";

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
      // console.log(bookList);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    // TODO: Create book objects:
    if (bookList) {
      const listOfBooks = buildBooks(bookList);
      // console.log(listOfBooks)
      // console.log(bookList)
    }
  }, [bookList]);

  const handleSubmit = (e) => {
    e.preventDefault();
    getBooks(searchTerm);
  };

  const handleSetTerm = (e) => {
    setSearchTerm(e.target.value)
    // console.log(searchTerm);
  };

  return (
    <div className='search-books'>
      <form className="search-form" onSubmit={handleSubmit}>
        <input placeholder="Search a book" className="search-bar" onChange={handleSetTerm}/>
        <button type="submit" onClick={handleSubmit} className="search-button">Search</button>
      </form>
      <div className="book-list-nav">
        <ul className="book-list">
          {bookList ? bookList.map((book, index) => {
            return <li className="book" key={index}>
              {book.volumeInfo && book.volumeInfo.imageLinks && (
                <img className="book-image" src={book.volumeInfo.imageLinks.smallThumbnail} />)}
              </li>
          }) : "no data"}
        </ul>
      </div>
    </div>
  )
}
