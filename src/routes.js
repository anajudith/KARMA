import { BrowserRouter, Route, Routes } from "react-router-dom"
import PageBase from "./pages/PageBase"
import Home from './pages/Home'
import About from "./pages/About"
import Products from "./pages/Products"
import Blog from "./pages/Blog"
import Budget from "./pages/Budget"

function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<PageBase/>}>
             <Route index element={<Home />}></Route>
             <Route path="About" element={<About />}></Route>
             <Route path="Products" element={<Products />}></Route>
             {/* <Route path="Blog" element={<Blog />}></Route> */}
             <Route path="Budget" element={<Budget />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes