import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import { ADMINISTRATOR, CLIENTES, HOME, LOGIN, NOSOTROS, PAGENOTFOUND, PRODUCTOS } from "./Routers/router"
import Administrator from "./Pages/Administrator"
import Login from "./Pages/Login"
import Nosotros from "./Pages/Nosotros"
import PageNotFound from "./Pages/PageNotFound"
import Productos from "./Pages/Productos"
import Clientes from "./Pages/Clientes"

function App() {
  

  return (
    <Routes>
      <Route path={HOME} element={<Home/>}/>
      <Route path={LOGIN} element={<Login/>}/>
      <Route path={ADMINISTRATOR} element={<Administrator/>}/>
      <Route path={PRODUCTOS} element={<Productos/>}/>
      <Route path={CLIENTES} element={<Clientes/>}/>
      <Route path={NOSOTROS} element={<Nosotros/>}/>
      <Route path={PAGENOTFOUND} element={<PageNotFound/>} />
    </Routes>
  )
}

export default App
