import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css"
import Inicio from "./components/Inicio";
import Menu from "./components/Menu";
import Login from "./components/Login";
import Admin from "./components/Admin";


function App() {
  return (
    <div className="container">
      <Router>
      <Menu />

        <Routes>
          <Route to='/' >
            <Route index element={<Inicio />}/>
          </Route>

          <Route path='/admin'>
            <Route index element={<Admin />}/>
          </Route>

          <Route path='/login'>
            <Route index element={<Login />}/>
          </Route>

        </Routes>

      </Router>
    </div>
  );
}

export default App;
