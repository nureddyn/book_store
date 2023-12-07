import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../App";
import SignBtn from "./SignBtn";

export default function Header() {
  const [signedIn, setSignedIn] = useContext(Context);

  return (
    <div className="header">
      {!signedIn ?
        <div className="btn">
          <SignBtn />
        </div>
        :
        <> 
          <div className="btn">
            <SignBtn />
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
        </>
      }
    </div>
  )
}
