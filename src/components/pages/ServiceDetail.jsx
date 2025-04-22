import { useParams } from "react-router-dom";
import useServices from "../../hooks/useServices";
import { motion } from "framer-motion";
import Button from "../Button";

function ServiceDetail() {
  const { packName } = useParams();

  const { services } = useServices();

  const service = services.find(
    (serv) => serv.name.toLocaleLowerCase() == packName.toLocaleLowerCase()
  );

  const getWhatsAppLink = () => {
    const message = encodeURIComponent(
      `Hola, tengo interés en el pack de diseño: ${service?.name}. ¿Podrías darme más información?`
    );
    return `https://wa.me/5492604362433?text=${message}`;
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1, transition: { duration: 0.15 } }}
    >
      <div className="flex gap-8 items-center w-full h-full bg-primary-50 justify-center p-12 text-primary-900 flex-wrap">
        <div className="rounded-lg max-w-md overflow-hidden shadow-md">
          <img
            src={service?.image}
            className="w-full h-full rounded-lg bg-cover"
            alt=""
          />
        </div>
        <div className="rounded-lg">
          <div className="text-center p-2 rounded-t-lg">
            <p className="text-lg">{service?.type}</p>
            <p className="text-4xl font-semibold text-center">
              {service?.name}
            </p>
          </div>
          <div className="flex flex-col gap-6 p-6">
            <p className="text-lg font-medium text-center">
              {service?.description}
            </p>
            <ul className="space-y-2 mb-4 max-w-md text-gray-700 font-normal">
              {service?.items.map((item, index) => {
                return <li key={index}>• {item.name}</li>;
              })}
            </ul>
            <p className="text-4xl font-semibold text-center">
              ${service?.price}
            </p>
            <Button
              className={"w-full bg-[#075e54] hover:bg-[#128c7e] text-white"}
              onClick={() => window.open(getWhatsAppLink())}
            >
              Consultar por WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ServiceDetail;
