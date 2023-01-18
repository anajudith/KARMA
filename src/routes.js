import { BrowserRouter, Route, Routes } from "react-router-dom"
import PageBase from "./pages/PageBase"
import Home from './pages/Home'
import About from "./pages/About"

function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<PageBase/>}>
             <Route index element={<Home />}></Route>
             <Route path="About" element={<About />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes