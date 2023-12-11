import React from 'react'

export default function CoverPage() {
  return (
    <div>
      <h1>Book Store</h1>
      <div>
        <h2>React Book Store (Search App)</h2>
        <h4>Overview</h4>
        <p>
        Welcome to the React Book Store App! This web application allows users to search for books using the Google Books API. Users can view details of each book, including its image, title, description, and rating. Additionally, the app enables users to save their favorite books for future reference.
        </p>
        <h4>Features</h4>
        <p> Google Books API Integration: Utilizes the Google Books API to fetch book data based on user searches.
          Search Bar: Allows users to enter keywords in the search bar to find books of interest.
          Book Display: Presents a list of books matching the search criteria, displaying each book's image, title, description, and rating.
          Favorites: Enables users to save their favorite books for quick access later.
        </p>
        <h4>Technologies Used</h4>
        <p>
          React: JavaScript library for building user interfaces.
          Google Books API: Provides access to a vast collection of book information.
          CSS: Styling for a visually appealing user interface.
        </p>
      </div>
    </div>
  )
}
