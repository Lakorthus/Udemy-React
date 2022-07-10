import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase-cofing";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const RegistrarUsuario = (e) =>{
    e.preventDefault()
    try{
       auth.createUserWithEmailAndPassword(email,pass)
       alert('Usuario registrado')
    }catch (e){
     console.log(e)

    }
  };

  return (
    <div className="row mt-5">
      <div className="col"></div>
      <div className="col">
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
            className="btn btn-primary mt-4  "
            value={"Registrar Usuario"}
            type="submit"
          />
        </form>
      </div>
      <div className="col"></div>
    </div>
  );
};

export default Login;
