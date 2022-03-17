import "./App.css";
import { useState } from "react";

import Welcome from "./pages/Welcome";
import TruePage from "./pages/TruePage";
import FalsePage from "./pages/FalsePage";

const App = () => {
  const [render, setRender] = useState(true);

  if (render) {
    return (
      <div className="App">
        <Welcome />
        <button onClick={() => setRender((prev) => !prev)}>
          Value: [{render.toString()}]
        </button>
        <TruePage />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Welcome />
        <button onClick={() => setRender((prev) => !prev)}>
          Value: [{render.toString()}]
        </button>
        <FalsePage />
      </div>
    );
  }

  // return (
  //   <div className="App">
  //     <Welcome />
  //     <button onClick={() => setRender((prev) => !prev)}>
  //       Value: [{render.toString()}]
  //     </button>
  //     {render ? <TruePage /> : <FalsePage />}
  //   </div>
  // );
};

export default App;
