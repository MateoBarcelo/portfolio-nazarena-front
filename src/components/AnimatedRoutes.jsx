import { useLocation, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Projects from "./pages/Projects.jsx"
import Contact from "./pages/Contact.jsx"
import Login from "./pages/Login.jsx"

import { AnimatePresence } from "framer-motion"
import Meses from "./Meses.jsx"

export default function AnimatedRoutes() {
    const location = useLocation()
    return(
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />} />
                <Route path="/proyectos" element={<Projects />} />
                <Route path="/contacto" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/felizmesiversario" element={<Meses />} />
            </Routes>
        </AnimatePresence>
    )
}