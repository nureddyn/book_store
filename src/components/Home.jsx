import React, { useState, useEffect } from 'react'
import Categories from './Categories';

export default function Home() {
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
  
  // if (bookList) {
  //   console.log(bookList);
  // }
  return (
    <div className='home-container'>
      <Categories />
      <div className='home-div'>
        <h1 className='home-h'>Discounts</h1>
        <div className='discounts'>
          <div className='disc-list'>
            {bookList ? bookList.map((book, index) => {
              if (book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail
                && book.saleInfo.listPrice && Number(book.saleInfo.listPrice.amount) < 20 && book.saleInfo.listPrice
                ) {
                    return (
                      <div className='disc-element' key={index}>
                        <a target="_blank" href={book.volumeInfo.infoLink}>
                          <img src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail} alt="image"></img>
                        </a>
                        <p>{book.volumeInfo.title}</p>

                        <p>${book.saleInfo.listPrice.amount}</p>
                      </div>)
                  }
            })
            : "no data"
          }
          </div>
        </div>
        {/* <div className='bests-div'>
          <h1 className='home-h'>Populars</h1>
          <div className='best-list'>
          {bookList ? bookList.map((book, index) => {
            { if (Number(book.volumeInfo.averageRating) > 3 && book.saleInfo.listPrice) { 
              return (
                <div className='best-book' key={index}>
                  <a target="_blank" href={book.volumeInfo.infoLink}>
                    <img src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail} alt="image"></img>
                  </a>
                  <p>{book.volumeInfo.title}</p>
                  <p>${book.saleInfo.listPrice.amount}</p>
                </div>
                )}
            }
          }) : "no data"}
          </div>
        </div> */}
      </div>
    </div>
  )
}
