import HeaderItem from "./HeaderItem.jsx";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 max-w-full shadow-lg h-10 md:h-12 bg-white flex justify-center align-center text-xs md:text-base">
      <ul className="flex justify-center items-center px-4 space-x-4 font-semibold">
        <HeaderItem to="/">INICIO</HeaderItem>
        <HeaderItem to="/proyectos">PROYECTOS</HeaderItem>
        <HeaderItem to="/tienda">TIENDA</HeaderItem>
        <HeaderItem to="/contacto">CONTACTO</HeaderItem>
      </ul>
    </header>
  );
}
