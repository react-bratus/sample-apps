import { NavLink } from "react-router-dom";

const Navigator = () => {
  return (
    <div className="Navigator">
      <h4>NAVIGATOR</h4>
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/page1">PAGE ONE</NavLink>
      <NavLink to="/page2">PAGE TWO</NavLink>
    </div>
  );
};

export default Navigator;
