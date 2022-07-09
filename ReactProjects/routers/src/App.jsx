import React from "react";
// import Inicio from "./components/Inicio";
// import Base from "./components/Base";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Usuarios from "./components/Usuarios";
import Usuario from "./components/Usuario";
const App = () => {
  return (
    // Tema de Route
    // <Router>
    //   <Link to={"/inicio"}>Inicio</Link>
    //   <br />
    //   <Link to={"/"}>Base</Link>

    //   <Routes>
    //     <Route path="/inicio/:nombre">
    //       {" "}
    //       //se puedeb crear mas rutas /:x/:x y hacer mix cons static /:x/y
    //       <Route index element={<Inicio />} />
    //     </Route>
    //     <Route path="/">
    //       <Route index element={<Base />} />
    //     </Route>
    //   </Routes>
    // </Router>

    <div>
      <Router>
        <Link to={"/"}>Usuarios</Link>

        <Routes>
          <Route path="/">
            <Route index element={<Usuarios />} />
          </Route>
          <Route path="/usuario/:id">
            <Route index element={<Usuario />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
