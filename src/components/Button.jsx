import PropTypes from "prop-types";

export default function Button({ children, className, type, onClick }) {
  return (
    <button
      type={type}
      className={`${
        className
          ? className
          : "bg-secondary-300 hover:bg-secondary-100 text-primary-900"
      } py-1 px-3 font-semibold text-lg
         rounded-lg  hover:shadow-lg transition-all active:transform 
         active:translate-y-1 z-20 shadow-md`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};
