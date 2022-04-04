import "./App.css";

import Welcome from "./Welcome";
import Page from "./Page";

export default function App() {
  const render = true;

  return (
    <div>
      APP PAGE
      <Welcome />
      {render && <Page />}
      {render ? <Footer /> : <div>I am a div</div>}
    </div>
  );
}
