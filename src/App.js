import { Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import SearchBooks from "./components/SearchBooks";
import Favorites from "./components/Favorites"
import CoverPage from "./components/CoverPage";

export const LogContext = createContext();

function App() {
  const [signedIn, setSignedIn] = useState(false);

  return (
    <div className="App">
      <LogContext.Provider value={[signedIn, setSignedIn]} >
        <Header />

        {signedIn ? 
          <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/search" element={<SearchBooks />}/>
          <Route path="/favorites" element={<Favorites />}/>
        </Routes> :
        <CoverPage />
        }
      </LogContext.Provider>
    </div>
  );
}

export default App;
