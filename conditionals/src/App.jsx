import "./App.css";

import TruePage from "./pages/TruePage";
import FalsePage from "./pages/FalsePage";

export default function App() {
  const render = true;

  if (render) {
    return (
      <>
        <TruePage />
      </>
    );
  } else {
    return (
      <>
        <FalsePage />
      </>
    );
  }
}
