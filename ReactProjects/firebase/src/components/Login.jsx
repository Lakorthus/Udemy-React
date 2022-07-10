import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase-cofing";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [msgerror, setMsgError] = useState(null);

  const RegistrarUsuario = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, pass)
      .then((r) => alert("Usuario registrado"))
      .catch((e) => {
        if (e.code == "auth/invalid-email") {
          setMsgError("Formato Email incorrecto");
        }
        if (e.code == "auth/weak-password") {
          setMsgError("Password debe tener 6 caracteres o mas");
        }
      });
  };

  const LoginUsuario = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, pass)
      .then((r) => console.log(r))
      .catch((err) => {
        if (err.code == "auth/wrong-password") {
          setMsgError("Password Incorrecta");
        }
      });
  };

  return (
    <div className="row mt-5">
      <div className="col"></div>
      <div className="col d-grid">
        <form onSubmit={RegistrarUsuario} className="form-group d-grid">
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="form-control"
            placeholder="Introduce el Email"
            type="email"
          />
          <input
            onChange={(e) => {
              setPass(e.target.value);
            }}
            className="form-control mt-2"
            placeholder="Introduce el Password"
            type="password"
          />
          <input
            className="btn btn-dark mt-4  "
            value={"Registrar Usuario"}
            type="submit"
          />
        </form>
        <button onClick={LoginUsuario} className="btn btn-success mt-3">
          Iniciar Sesion
        </button>
        {msgerror != null ? (
          <div>
            <p className="alert alert-danger" role="alert">{msgerror}</p>
          </div>
        ) : (
          <span></span>
        )}
      </div>
      <div className="col"></div>
    </div>
  );
};

export default Login;
