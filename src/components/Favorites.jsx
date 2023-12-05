import favoriteBooks from "../models/bookList";

export default function Favorites() {
  return (
    <div className="favorites-div">
      <div className="favorites">
        <ul className="book-list">
          {favoriteBooks.map((book, index) => {
            return (
              <li className="book" key={index}>
                <a target="_blank" href={book.link}>
                  <img src={book.image}/>
                </a>
                <a target="_blank" href={book.link}>
                  <h4 className="book-title">{book.title}</h4>
                </a>
                <p className="rating">{book.rating}⭐</p>
                <h4 className="price">${book.price}</h4>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
