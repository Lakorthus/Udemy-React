import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase-cofing";

const Menu = () => {
  const [usuario, setUsuario] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUsuario(user.email);
        console.log(user.email);
      }
    });
  }, []);

  const cerrarSesion = () =>{
    auth.signOut()
    setUsuario(null)
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to={"/"}>
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/admin"}>
              Admin
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/login"}>
              Login
            </Link>
          </li>
        </ul>
        {usuario ? (
          <button onClick={cerrarSesion} className="btn btn-danger">
            Cerrar Sesion
          </button>
        ) : (
          <span></span>
        )}
      </nav>
    </div>
  );
};

export default Menu;
