import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigator from "./components/Navigator";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import PagePagePagePagePagePagePage2 from "./pages/PagePagePagePagePagePagePage2";

const App = () => {
  return (
    <div className="app">
      <h1>TITLE :: SAMPLE APP V6</h1>
      <Header />
      <Body />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Navigator>
                <Home />
              </Navigator>
            }
          />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<PagePagePagePagePagePagePage2 />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
