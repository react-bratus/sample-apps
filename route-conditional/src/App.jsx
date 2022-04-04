import "./App.css";
import { Route } from "react-router-dom";

import Page1 from "./Page1";
import Page2 from "./Page2";

export default function App() {
  return (
    <>
      {yoYoYoYo && <Page1 />}
      {areYouSure ? <Page2 /> : <div>NO NO NO!</div>}
    </>
  );
}
