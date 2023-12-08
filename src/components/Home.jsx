import React, { useState, useEffect } from 'react'

export default function Home() {
  const API_KEY = process.env.REACT_APP_API_KEY;

  const [bookList, setBookList] = useState(null);
  const getBooks = async (input) => {
    const URL = "https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes";
    
    try {
      const response = await fetch(`${URL}&key=${API_KEY}`);
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
  
  if (bookList) {
    console.log(bookList);
  }
  return (
    <div className='home-div'>
      <h1 className='home-h'>Home</h1>
      <div className='discounts'>
        <ul className='disc-list'>
          {bookList ? bookList.map((book, index) => {
            return (
            <li className='disc-element' key={index}>
              <img src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail} alt="image"></img>
              <p>{book.volumeInfo.title}</p>
            </li>)  
        })
        : "no data"
      }
        </ul>
      </div>
      </div>
  )
}
