import Button from "../Button";
import { useNavigate } from "react-router";
/* eslint-disable react/prop-types */
export default function ServiceCard({ service }) {
  let navigate = useNavigate();

  return (
    <div className="rounded-lg overflow-hidden max-w-sm transition-all flex flex-col items-start">
      <div className="h-auto aspect-video w-full">
        <img
          src={service.image}
          alt={service.name}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6 px-0 flex flex-col w-full">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {service.name}
        </h3>
        <p className="text-gray-700 mb-4 h-10">{service.description}</p>

        <div className="">
          <div className="flex text-2xl gap-2 mb-2">
            <p className="font-medium text-primary-900 text-xl">Desde</p>
            <p className="font-semibold text-primary-900 text-xl">
              ${service.price}
            </p>
          </div>
        </div>
        <div className="w-full justify-center items-center">
          <Button
            className="w-full bg-secondary-300 hover:bg-secondary-100"
            onClick={() => {
              return navigate(`/tienda/${service.name.toLocaleLowerCase()}`);
            }}
          >
            Ver detalles
          </Button>
        </div>
      </div>
    </div>
  );
}
// bg-[#075e54] hover:bg-[#128c7e]
