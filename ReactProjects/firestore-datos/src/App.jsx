import React, { useState, useEffect } from "react";
import { store } from "./firebase-config";

function App() {
  const [modoedicion, setModoEdicion] = useState(null);
  const [idusuario, setIdUsuario] = useState("");
  const [nombre, setNombre] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [usuariosagenda, setUsuariosAgenda] = useState("");

  useEffect(() => {
    const getUsuarios = async () => {
      const { docs } = await store.collection("agenda").get();
      const nuevoArray = docs.map((item) => ({ id: item.id, ...item.data() }));
      setUsuariosAgenda(nuevoArray);
    };
    getUsuarios();
  }, []);

  const setUsuarios = async (e) => {
    e.preventDefault();
    if (!nombre.trim()) {
      setError("El campo nombre esta vacio");
    }
    if (!phone.trim()) {
      setError("El campo telefono esta vacio");
    }
    const usuario = {
      nombre: nombre,
      telefono: phone,
    };
    try {
      const data = await store.collection("agenda").add(usuario);
      const { docs } = await store.collection("agenda").get();
      const nuevoArray = docs.map((item) => ({ id: item.id, ...item.data() }));
      setUsuariosAgenda(nuevoArray);
      alert("Friend added");
    } catch (e) {
      console.log(e);
    }
    setNombre("");
    setPhone("");
  };

  const borrarUsuario = async (id) => {
    try {
      await store.collection("agenda").doc(id).delete();
      const { docs } = await store.collection("agenda").get();
      const nuevoArray = docs.map((item) => ({ id: item.id, ...item.data() }));
      setUsuariosAgenda(nuevoArray);
    } catch (e) {
      console.log(e);
    }
  };

  const pulsarActualizar = async (id) => {
    try {
      const data = await store.collection("agenda").doc(id).get();
      const { nombre, telefono } = data.data();
      setNombre(nombre);
      setPhone(telefono);
      setIdUsuario(id);
      setModoEdicion(true);
      console.log(id);
    } catch (e) {
      console.log(e);
    }
  };

  const setUpdate = async (e) => {
    e.preventDefault();
    if (!nombre.trim()) {
      setError("El campo nombre esta vacio");
    }
    if (!phone.trim()) {
      setError("El campo telefono esta vacio");
    }
    const userUpdate = {
      nombre: nombre,
      telefono: phone,
    };
    try {
      await store.collection("agenda").doc(idusuario).set(userUpdate);
      const { docs } = await store.collection("agenda").get();
      const nuevoArray = docs.map((item) => ({ id: item.id, ...item.data() }));
      setUsuariosAgenda(nuevoArray);
      alert("Friend Edit");
    } catch (e) {
      console.log(e);
    }
    setNombre("");
    setPhone("");
    setIdUsuario("");
    setModoEdicion(false);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Formulario de Usuarios</h2>
          <form
            onSubmit={modoedicion ? setUpdate : setUsuarios}
            className="form-group d-grid"
          >
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
            {modoedicion ? (
              <input
                type="submit"
                className="btn btn-info mt-3"
                value={"Editar"}
              />
            ) : (
              <input
                type="submit"
                className="btn btn-dark mt-3"
                value={"Registrar"}
              />
            )}
          </form>
          {error ? <div>{error}</div> : <span></span>}
        </div>
        <div className="col">
          <h2>Lista de tu agenda</h2>
          <ul className="list-group">
            {usuariosagenda.length != 0 ? (
              usuariosagenda.map((item) => (
                <li className="list-group-item" key={item.id}>
                  <strong>{item.nombre}</strong> -- {item.telefono}
                  <button
                    onClick={(id) => {
                      borrarUsuario(item.id);
                    }}
                    className="btn btn-danger float-end px-3"
                  >
                    Borrar
                  </button>
                  <button
                    onClick={(id) => {
                      pulsarActualizar(item.id);
                    }}
                    className="btn btn-primary float-end me-2"
                  >
                    Actualizar
                  </button>
                </li>
              ))
            ) : (
              <span>Lo siento no hay usuarios en tu agenda</span>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
