import { Link } from "react-router-dom";
import { useContext } from "react";
import { LogContext } from "../App";
import LogBtn from "./LogBtn";
import SignBtn from "./SignBtn";

export default function Header() {
  const [logIn, setLogIn] = useContext(LogContext);

  return (
    <div className="header">
      <div className="logo"></div>
      {!logIn ?
        <div className="btn">
          <LogBtn />
          <SignBtn />
        </div>
        :
        <> 
          <div className="btn">
            <LogBtn />
          </div>
          <Link to="/">
            <div className="home-link">Home</div>
          </Link>
          <Link to="/search">
            <div className="search-link">Search Books</div>
          </Link>
          <Link to="/favorites">
            <div className="books-link">Favorites</div>
          </Link>
          <div className="separator"></div>
        </>
      }
    </div>
  )
}
