import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <ul>
          <li className="nav-item">
            <Link className="nav-link" to={"/"}>Inicio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/admin"}>Admin</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/login"}>Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
