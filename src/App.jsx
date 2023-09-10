import './App.css'
import Header from './components/header/Header.jsx'
import Footer from './components/Footer.jsx'
import AnimatedRoutes from './components/AnimatedRoutes'

function App() {

  return (
    <section className='h-full bg-primary-400'>
      <Header />
      <AnimatedRoutes />
      <Footer />
    </section>
  )
}

export default App
