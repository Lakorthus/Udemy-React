import React, { useState } from "react";
import uniqid from "uniqid";

const ListadoNombres = () => {
  const [nombre, setNombre] = useState("");
  const [listaNombres, setListaNombres] = useState([]);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [id, setId] = useState("");
  const [error, setError] = useState(null);

  const addNombre = (e) => {
    e.preventDefault();
    if (!nombre.trim()) {
      setError("Campo vacio");
      return;
    }
    const nuevoNombre = {
      id: uniqid(),
      tituloNombre: nombre,
    };
    setListaNombres([...listaNombres, nuevoNombre]);
    setNombre("");
    setError(null);
  };
  const deleteNombre = (id) => {
    const nuevoArray = listaNombres.filter((item) => item.id !== id);
    setListaNombres(nuevoArray);
  };
  const editar = (item) => {
    setModoEdicion(true);
    setNombre(item.tituloNombre);
    setId(item.id);
  };
  const editarNombre = (e) => {
    e.preventDefault();
    const nuevoArray = listaNombres.map((item) =>
      item.id === id ? { id: id, tituloNombre: nombre } : item
    );
    setListaNombres(nuevoArray);
    setModoEdicion(false);
    setNombre("");
  };

  return (
      <div>
        <h2>Aplicacion de Crud Basica</h2>
      <div className="row">
        <div className="col">
          <h2>Listado de Nombres</h2>
          <ul className="list-group">
            {listaNombres.map((item) => (
              <li key={item.id} className="list-group-item">
                {item.tituloNombre}
                <button
                  onClick={() => {
                    deleteNombre(item.id);
                  }}
                  className="btn btn-danger float-end"
                >
                  Borrar nombre
                </button>
                <button
                  onClick={() => {
                    editar(item);
                  }}
                  className="btn btn-info float-end"
                >
                  Editar nombre
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col">
          <h2>Fomulario para agregar Nombres</h2>
          <form
            onSubmit={modoEdicion ? editarNombre : addNombre}
            className="form-group"
          >
            <input
              onChange={(e) => {
                setNombre(e.target.value);
              }}
              className="form-control mb-3"
              type="text"
              placeholder="Introduce el nombre"
              value={nombre}
            />
            <input
              className="form-control btn btn-primary"
              type="submit"
              value={modoEdicion ? "EDITAR NOMBRE" : "REGISTRAR NOMBRE"}
            />
          </form>
          {error != null ? (
            <div className="callout alert-danger mt-1">{error}</div>
          ) : (
            <span></span>
          )}
        </div>
      </div>
    </div>
  );
};
export default ListadoNombres;
