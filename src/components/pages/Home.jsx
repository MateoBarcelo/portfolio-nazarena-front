import projectjson from '../../mockups/projects.json'
import Banner from '../banner/Banner.jsx'
import ProjectGrid from '../project/ProjectGrid.jsx'
import InfoCard from '../InfoCard.jsx'
import Button from '../Button.jsx'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import useProjects from '../../hooks/useProjects'
import projectService from '../../services/project.js'


export default function  Home() {

        const [mappedProjects] = useProjects()

        const projectList = mappedProjects?.slice(0,4)
    
    
        return(
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:1, transition:{duration:0.15}}}>
            <Banner />
            <div className='w-full h-8 bg-primary-700'></div>
            <main className='md:sticky md:top-0 md:scroll-smooth h-full w-full [background-image:url("https://cdn.discordapp.com/attachments/1079813884187258922/1301727873819742310/Arcana_Posteos_1080_x_1350_px.jpg?ex=6725880e&is=6724368e&hm=98eedfa5abae257cf5a9e8f099799f308f2d8cdccd9d89acd9d86733e7eac381&")]'>
              <div className='flex flex-col md:flex-row w-full md:justify-between items-center md:items-start px-32 py-16'>
                <InfoCard title="Identidad" image="pen.svg" color="bg-primary-100">Te garantizo que tu marca tenga una apariencia coherente y reconocible 
en todos sus materiales 
y plataformas.</InfoCard>
                  <InfoCard title="Impresiones" image="map.png" color="bg-primary-100">Convierto tus ideas en diseños de alta calidad. ¡Desde posteos hasta vídeos que cuenten la historia de tu negocio!</InfoCard>
                <InfoCard title="Gestión" image="package.svg" color="bg-primary-100">Gestiono tus perfiles sociales para crear contenido atractivo y fomentar la interacción con tu audiencia</InfoCard>
              </div>
              <div className='w-full flex flex-col justify-center items-center'>
                  <p className='text-3xl md:text-4xl text-white py-6 font-semibold'>Algunos de mis proyectos</p>
                  <div className="w-1/2 h-1 bg-white mb-2"></div>
              </div>
              <ProjectGrid projects={projectList}></ProjectGrid>
              <div className='w-full flex justify-center pb-12'><Button><Link to="/proyectos">Ver más trabajos</Link></Button></div>
            </main>
          </motion.div>
        )
      
}