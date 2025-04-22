import "./App.css";
import Header from "./components/header/Header.jsx";
import Footer from "./components/Footer.jsx";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <section className={`h-full w-full bg-primary-500`}>
      <Header />
      <AnimatedRoutes />
      <Footer />
    </section>
  );
}

export default App;
