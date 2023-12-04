import { Route, Routes } from "react-router-dom";

// import Home from "./pages/Home";
// import SearchBooks from "./pages/SearchBooks";

import Home from "./components/Home";
import SearchBooks from "./components/SearchBooks";

function App() {
  return (
    <div className="App">
      {/* Create Header Nav here */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/search" element={<SearchBooks />} />
      </Routes>
    </div>
  );
}

export default App;
