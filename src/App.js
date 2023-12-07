import { Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import SearchBooks from "./components/SearchBooks";
import Favorites from "./components/Favorites"

export const Context = createContext();

function App() {
  const [signedIn, setSignedIn] = useState(false);

  return (
    <div className="App">
      <Context.Provider value={[signedIn, setSignedIn]} >
        <Header />

        {signedIn ? 
          <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/search" element={<SearchBooks />}/>
          <Route path="/favorites" element={<Favorites />}/>
        </Routes> :
        <h1>Sign In</h1>
        }
      </Context.Provider>
    </div>
  );
}

export default App;
