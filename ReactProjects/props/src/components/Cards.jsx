import React from "react";

const Cards = (props) => {
  //Extraemos todas las props con Object Destructuring
  const { imagen, titulo, texto } = props;

  return (
    <div className="card" style={{ width: "20rem" }}>
      <img src={imagen} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{texto}</p>
        <button className="btn btn-primary">
          Ver mas
        </button>
      </div>
    </div>
  );
};

export default Cards;
