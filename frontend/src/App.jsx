import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import { ADMINISTRATOR, HOME, LOGIN } from "./Routers/router"
import Administrator from "./Pages/Administrator"
import Login from "./Pages/Login"

function App() {
  

  return (
    <Routes>
      <Route path={HOME} element={<Home/>}/>
      <Route path={LOGIN} element={<Login/>}/>
      <Route path={ADMINISTRATOR} element={<Administrator/>}/>
    </Routes>
  )
}

export default App
