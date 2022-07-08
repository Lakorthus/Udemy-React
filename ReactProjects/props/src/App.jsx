import React from "react";

import Cards from "./components/Cards";


function App() {
  return (
    <div className="container">
      <h1>Propiedades de los componentes</h1>
      <hr />
      <br />
      <div className="row">
        <div className="col">
          <Cards 
            imagen='https://picsum.photos/seed/picsum/200/300'
            titulo='Titulo carta 1'
            texto='Texto de la carta 1'
          />
        </div>
        <div className="col">
          <Cards 
            imagen='https://picsum.photos/seed/picsum/200/300'
            titulo='Titulo carta 2'
            texto='Texto de la carta 2'
          />
        </div>
        <div className="col">
          <Cards 
            imagen='https://picsum.photos/seed/picsum/200/300'
            titulo='Titulo carta 3'
            texto='Texto de la carta 3'
          />
        </div>
      </div>

      
    </div>
  );
}

export default App;
