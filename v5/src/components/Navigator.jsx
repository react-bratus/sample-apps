import { Link } from "react-router-dom";

const Navigator = () => {
  return (
    <div className="Navigator">
      <h4>NAVIGATOR</h4>
      <Link to="/">HOME</Link>
      <Link to="/page1">PAGE ONE</Link>
      <Link to="/page2">PAGE TWO</Link>
    </div>
  );
};

export default Navigator;
