import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigator from "./components/Navigator";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../../all-features/all-features/src/components/pages/Home";
import Page1 from "../../all-features/all-features/src/components/pages/Page1";
import Page2 from "../../all-features/all-features/src/components/pages/Page2";

const App = () => {
  return (
    <div className="app">
      <h1>TITLE :: SAMPLE APP v5</h1>
      <Header />
      <Body />
      <BrowserRouter>
        <Navigator />
        <Route exact path="/" component={Home} />
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
