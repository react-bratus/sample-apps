import "./App.css";
import Footer from "./components/Footer";
import { Route } from "react-router-dom";

import Page1 from "./pages/Page1";

const App = () => {
  return (
    <>
      <Route path="/page1" element={<Page1 />} />
      <Footer />
    </>
  );
};

export default App;
