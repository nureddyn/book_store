import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <div className="home-link">Home</div>
      </Link>
      <Link to="/search">
        <div className="search-link">Search Books</div>
      </Link>
      <Link to="/favorites">
        <div className="books-link">Favorites</div>
      </Link>
    </div>
  )
}
