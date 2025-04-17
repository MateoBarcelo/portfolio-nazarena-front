import { motion } from "framer-motion";
import useServices from "../../hooks/useServices.jsx";
import ServiceGrid from "../services/ServiceGrid.jsx";

export default function Services() {
  document.documentElement.scrollTop = 0;

  const { services } = useServices();

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.25 } }}
    >
      <div className="text-center text-white flex flex-col justify-center items-center">
        <p className="text-4xl font-semibold mt-16">Packs de diseño</p>
        <p className="text-lg md:text-xl py-6 opacity-75 max-w-4xl">
          Soluciones de diseño completas para emprendedores y pequeñas empresas.
          Cada pack está cuidadosamente creado para ayudarte a destacar en el
          mercado.
        </p>
      </div>
      <ServiceGrid services={services}></ServiceGrid>
    </motion.div>
  );
}
