import { useEffect, useState } from "react";
import { getAll } from "../services/services.js";

function useServices() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const services = getAll();

    setServices(services);
  }, []);

  return { services };
}

export default useServices;
