import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { BrowserRouter, Link, Route } from "react-router-dom";

import Home from "./pages/Home";
import Page1 from "./pages/Page1";

const displayFooter = true;

const App = () => {
  return (
    <div className="app">
      <h1>V5 MINI APP COMPONENT</h1>
      <Body />
      <BrowserRouter>
        <Link to="/">HOME</Link>
        <br />
        <Link to="/page1">PAGE ONE</Link>

        <Route exact path="/" component={Home} />
        <Route path="/page1" component={Page1} />
      </BrowserRouter>
      {displayFooter && <Footer />}
    </div>
  );
};

export default App;
