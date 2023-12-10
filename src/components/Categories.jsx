import { useState, useEffect } from "react";

export default function Categories() {

  const API_KEY = process.env.REACT_APP_API_KEY;

  const [bookList, setBookList] = useState(null);

  const getBooks = async () => {
    const URL = "https://www.googleapis.com/books/v1/volumes?q=*";
    const maxResults = "maxResults=40";
    try {
      const response = await fetch(`${URL}&key=${API_KEY}&${maxResults}`);
      const data = await response.json();
      // console.log(data);
      setBookList(data.items);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect (() =>{
    getBooks();
  }, [])

  // if (bookList && bookList.volumeInfo.categories) {
  //   console.log(bookList.volumeInfo.categories);
  // }
  
  const [categories, setCategories] = useState([]);

  return (
    <div className='side-bar'>
      <h2>Categories</h2>
      <div className='categories'>
        <ul className="category-list">
        {bookList ? bookList.map((book, index) => {
              if (book.volumeInfo.categories && !categories.includes(book.volumeInfo.categories[0])) {
                return (
                  <li className='disc-element' key={index}>
                    <p>{book.volumeInfo.categories[0]}</p>
                  </li>)
              }
          })
          : "no data"
        }
        </ul>
      </div>
    </div>
  )
}
