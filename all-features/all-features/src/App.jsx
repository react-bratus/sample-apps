import "./App.css";

import Page from "./components/AnotherPage";
import LotsOfLinesComp from "./components/Welcome";
import Navigator from "./components/Navigator";
import Body from "./components/Body";
import Home from "./components/pages/Home";
import Page1 from "./components/pages/Page1";
import Page2 from "./components/pages/Page2";

export default function App() {
  const condition = true;

  return (
    <div>
      APP PAGE
      <LotsOfLinesComp />
      <BrowserRouter>
        <Navigator />
        <Route exact path="/" component={Home} />
        <Route path="/page1" component={Body} />
        <Route path="/page2" component={Page1} />
        <Route path="/page2" component={Page2} />
      </BrowserRouter>
      {condition && <Page />}
      {condition ? <Footer /> : <div>I am a div</div>}
    </div>
  );
}
