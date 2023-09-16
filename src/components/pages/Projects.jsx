import projectjson from '../../mockups/projects.json'
import ProjectGrid from '../project/ProjectGrid'
import {motion} from 'framer-motion'
import InfoCard from '../InfoCard.jsx'
import useProjects from '../../hooks/useProjects'

export default function Projects() {

    document.documentElement.scrollTop = 0
    

    const [projects] = useProjects()

    return(
        <motion.div initial={{width:0}} animate={{width:"100%"}} exit={{x:window.innerWidth, transition:{duration:0.25}}}>
            <div className='text-center text-white'>
                <p className='text-4xl font-semibold mt-16'>Aplicaciones más usadas</p>
                <p className='text-lg md:text-xl py-6 opacity-75'>Estas son las aplicaciones que más utilizo para mis proyectos, <br></br> tengo gran experiencia en Illustrator, Photoshop, InDesign y Filmora</p>
            </div>
            <div className='w-full flex md:flex-row flex-col justify-center items-center md:space-x-24'>
                <InfoCard title="Photoshop" image="ps.svg" color="bg-primary-700" center={true}><p>Desde 2011</p></InfoCard>
                <InfoCard title="Illustrator" image="ai.svg" color="bg-primary-700" center={true}><p>Desde 2016</p></InfoCard>
                <InfoCard title="Lightroom" image="lr.svg" color="bg-primary-700" center={true}><p>Desde 2015</p></InfoCard>

            </div>
            <p className='text-center text-white text-4xl font-semibold mt-16'>Mis proyectos</p>
            <ProjectGrid projects={projects}></ProjectGrid>
            
        </motion.div>
    )
}