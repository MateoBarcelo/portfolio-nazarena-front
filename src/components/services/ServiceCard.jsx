import Button from "../Button";

/* eslint-disable react/prop-types */
export default function ServiceCard({ service }) {
  const getWhatsAppLink = () => {
    const message = encodeURIComponent(
      `Hola, tengo interés en el pack de diseño: ${service.name}. ¿Podrías darme más información?`
    );
    return `https://wa.me/5492604362433?text=${message}`;
  };
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg h-[650px] flex flex-col">
      <div className="h-32 w-full">
        <img
          src={service.image}
          alt={service.name}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {service.name}
        </h3>
        <div className="mb-4">
          <p className="text-gray-700 mb-4">{service.description}</p>
          <ul className="text-gray-600 space-y-2 mb-4">
            {service.items.map((item, index) => {
              return <li key={index}>• {item.name}</li>;
            })}
          </ul>
        </div>
        <div className="mt-auto">
          <div className="flex text-2xl gap-2 mb-4">
            <p className="font-semibold text-primary-700">Desde</p>
            <p className="font-bold text-primary-700">${service.price}</p>
          </div>
          <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
            <Button className="w-full bg-[#075e54] hover:bg-[#128c7e] text-white">
              Consultar por WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
