import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import Page1 from "./pages/Page1";

const App = () => {
  return (
    <div className="app">
      <h1>V6 MINI APP COMPONENT</h1>
      <Body />
      <BrowserRouter>
        <NavLink to="/">HOME</NavLink>
        <br />
        <NavLink to="/page1">PAGE ONE</NavLink>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
