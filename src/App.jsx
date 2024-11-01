import './App.css'
import Header from './components/header/Header.jsx'
import Footer from './components/Footer.jsx'
import AnimatedRoutes from './components/AnimatedRoutes'

function App() {

  return (
    <section className='h-full w-full [background-image:url("https://cdn.discordapp.com/attachments/1079813884187258922/1301727873819742310/Arcana_Posteos_1080_x_1350_px.jpg?ex=6725880e&is=6724368e&hm=98eedfa5abae257cf5a9e8f099799f308f2d8cdccd9d89acd9d86733e7eac381&")]'>
      <Header />
      <AnimatedRoutes />
      <Footer />
    </section>
  )
}

export default App
