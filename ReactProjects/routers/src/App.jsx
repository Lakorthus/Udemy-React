import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom'

const App = () => {
  return (
    <Router>

    <Routes>
      <Route path="/inicio">
        Estas en inicio
      </Route>
      <Route path="/">
        Esta es la Url base
      </Route>
    </Routes>

    </Router>
  )
}

export default App