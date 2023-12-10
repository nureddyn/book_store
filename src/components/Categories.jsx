import React, { useState, useEffect } from "react";

export default function Categories() {
  const API_KEY = process.env.REACT_APP_API_KEY;

  const [bookList, setBookList] = useState(null);
  const [categories, setCategories] = useState([]);

  const getBooks = async () => {
    const URL = "https://www.googleapis.com/books/v1/volumes?q=*";
    const maxResults = "maxResults=40";
    try {
      const response = await fetch(`${URL}&key=${API_KEY}&${maxResults}`);
      const data = await response.json();
      setBookList(data.items);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  useEffect(() => {
    if (bookList && bookList.length > 0) {
      const uniqueCategories = Array.from(
        new Set(
          bookList
            .filter((book) => book.volumeInfo.categories)
            .map((book) => book.volumeInfo.categories[0])
        )
      );

      setCategories(uniqueCategories);
    }
  }, [bookList]);

  return (
    <div className="side-bar">
      <h2>Categories</h2>
      <div className="categories">
        <ul className="category-list">
          {categories.length > 0 ? (
            categories.map((category, index) => (
              <a className="category-a" target="_blank" href={`https://www.google.com/search?tbm=bks&q=${category}`}>
              <li className="category-element" key={index}>
                <p>{category}</p>
              </li>
              </a>
            ))
          ) : (
            <p>No categories found.</p>
          )}
        </ul>
      </div>
    </div>
  );
}
