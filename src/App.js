import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">

        <nav>
          <Link to="/Menu">Menu</Link>
          <Link to="/Search">Search</Link>
          <Link to="/FoodShop">Food Shop</Link>
        </nav>
        <Routes>
          <Route path="/Menu" />
          <Route path="/Search" />
          <Route path="/FoodShop" />
        </Routes>

    </div>
  );
}

export default App;
