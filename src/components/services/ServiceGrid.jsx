import PropTypes from "prop-types";
import ServiceCard from "./ServiceCard.jsx";

export default function ServiceGrid({ services }) {
  const listServices = services.map((service) => {
    return <ServiceCard key={service.id} service={service} />;
  });

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-4 p-8`}
    >
      {listServices}
    </div>
  );
}

ServiceGrid.propTypes = {
  services: PropTypes.array.isRequired,
};
