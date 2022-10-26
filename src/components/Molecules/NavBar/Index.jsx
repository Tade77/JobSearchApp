import React from "react";
import Logo from "../../Atom/Button/Logo";
import { NavLink, Link } from "react-router-dom";
import Button from "../../Atom/Button/Button";
import "./Nav.scss";

const NavBar = () => {
  const activeStyle = ({ isActive }) => {
    return {
      color: isActive ? "blue" : "black",
    };
  };
  const navitems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "News",
      path: "/news",
    },
    {
      name: "Jobs",
      path: "/jobs",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  return (
    <nav className="nav--items">
      <Link to="/">
        <Logo />
      </Link>
      <p className="spacer"></p>
      <div className="nav--labels">
        {navitems.map((navitem, Index) => (
          <NavLink to={navitem.path} key={Index} style={activeStyle}>
            {navitem.name}
          </NavLink>
        ))}
      </div>
      <Button label="Login" />
    </nav>
  );
};

export default NavBar;
