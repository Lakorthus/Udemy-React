import React, { useState, useEffect } from "react";
import { store } from "./firebase-config"

function App() {
  const [nombre, setNombre] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [usuario, setUsuario] = useState("");

  const setUsuarios = async (e)=>{
    e.preventDefault()
    if(!nombre.trim()){
      setError('El campo nombre esta vacio')
    }
    if(!phone.trim()){
      setError('El campo telefono esta vacio')
    }
    const usuario = {
      nombre:nombre,
      telefono:phone
    }
    try{

      const data = await store.collection('agenda').add(usuario)
      console.log('tarea added')
    }catch(e){
      console.log(e)
    }
    setNombre('')
    setPhone('')


  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Formulario de Usuarios</h2>
          <form onSubmit={setUsuarios} className="form-group d-grid">
            <input
            value={nombre}
              onChange={(e) => {
                setNombre(e.target.value);
              }}
              type="text"
              className="form-control mt-2"
              placeholder="Introduce el nombre"
            />
            <input
            value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              type="text"
              className="form-control mt-2"
              placeholder="Introduce el numero"
            />
            <input
              type="submit"
              className="btn btn-dark mt-3"
              value={"Registrar"}
            />
          </form>
          {
            error ?
            (
              <div>{error}</div>
            )
            :
            (
              <span></span>
            )
          }
        </div>
        <div className="col">
          <h2>Lista de tu agenda</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
