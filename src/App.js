import { Route, Routes } from "react-router-dom";

// import Home from "./pages/Home";
// import SearchBooks from "./pages/SearchBooks";
import Header from "./components/Header";
import Home from "./components/Home";
import SearchBooks from "./components/SearchBooks";
import Favorites from "./components/Favorites"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/search" element={<SearchBooks />}/>
        <Route path="/favorites" element={<Favorites />}/>
      </Routes>
    </div>
  );
}

export default App;
