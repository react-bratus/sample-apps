import "./App.css";

import Welcome from "./Welcome";

export default function App() {
  const render = true;

  return <div>{render && <Welcome />}</div>;
}
