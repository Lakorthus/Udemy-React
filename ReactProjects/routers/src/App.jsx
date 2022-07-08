import React from "react";
import Inicio from "./components/Inicio";
import Base from "./components/Base";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Link to={'/inicio'}>Inicio</Link>
      <Link to={'/'}>Base</Link>

      <Routes>
        <Route path="/inicio">
          <Route index element={<Inicio />} />
        </Route>
        <Route path="/">
          <Route index element={<Base />} />
        </Route>
      </Routes>
    </Router>
    
  );
};

export default App;
