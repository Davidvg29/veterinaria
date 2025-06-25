import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import { ADMINISTRATOR, HOME, LOGIN, NOSOTROS } from "./Routers/router"
import Administrator from "./Pages/Administrator"
import Login from "./Pages/Login"
import Nosotros from "./Pages/Nosotros"

function App() {
  

  return (
    <Routes>
      <Route path={HOME} element={<Home/>}/>
      <Route path={LOGIN} element={<Login/>}/>
      <Route path={ADMINISTRATOR} element={<Administrator/>}/>
      <Route path={NOSOTROS} element={<Nosotros/>}/>
    </Routes>
  )
}

export default App
