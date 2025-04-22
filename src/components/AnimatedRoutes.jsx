import { useLocation, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Services from "./pages/Services.jsx";

import { AnimatePresence } from "framer-motion";
import ServiceDetail from "./pages/ServiceDetail.jsx";

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<Projects />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tienda" element={<Services />} />
        <Route path="/tienda/:packName" element={<ServiceDetail />} />
      </Routes>
    </AnimatePresence>
  );
}
