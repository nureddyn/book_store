import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/search">
        <div>Search Books</div>
      </Link>
    </div>
  )
}
