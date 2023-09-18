import Home from './pages/HomePage/HomeComponent'
import Sobre from './pages/SobrePage/SobreComponent'
import PaginaDoProjeto from './pages/PaginaProjeto/ProjetoComponent'
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/sobre",
    element: <Sobre/>
  },
  {
    path: "/projeto",
    element: <PaginaDoProjeto/>
  }
])