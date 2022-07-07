import React, { useState } from "react";
import uniqid from "uniqid";

const ListadoNombres = () => {
  const [nombre, setNombre] = useState("");
  const [listaNombres, setListaNombres] = useState([]);

  const addNombre = (e) => {
    e.preventDefault();
    const nuevoNombre = {
      id: uniqid(),
      tituloNombre: nombre,
    };
    setListaNombres([...listaNombres, nuevoNombre]);
    setNombre('')
  };

  return (
    <div>
      <h2>Aplicacion de Crud Basica</h2>
      <div className="row">
        <div className="col">
          <h2>Listado de Nombres</h2>
          <ul className="list-group">
                  {
                      listaNombres.map(item =>
                        <li key={item.id} className="list-group-item">{item.tituloNombre}</li>
                        )
              
                  }
              
          </ul>
        </div>
        <div className="col">
          <h2>Fomulario para agregar Nombres</h2>
          <form
            onSubmit={(e) => {
              addNombre(e);
            }}
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
              value={"Registrar Nombre"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};
export default ListadoNombres;
