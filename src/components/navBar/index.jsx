import { Link } from "react-router-dom";

import "./navbar.css";
const Navbar = () => {
  return (
    <header className="nav__bar">
      <div className="logo">Theater </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>About</li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/calender">Calender</Link>
          </li>
        </ul>
      </nav>
      {/* <div className="side__menu">
        <div onClick={change} className="burger__menu">
          {icon}
        </div>
      </div> */}
    </header>
  );
};

export default Navbar;
