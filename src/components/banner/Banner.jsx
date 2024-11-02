import naz from '../../assets/Icons/naz.png'
import be from '../../assets/Icons/be.svg'
import ig from '../../assets/Icons/ig.svg'
import ln from '../../assets/Icons/ln.svg'
import Description from '../banner/Description.jsx'
import Button from '../Button.jsx'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


export default function Banner () {
    
    const [switched, setSwitched] = useState(true);
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setSwitched(prevSwitched => !prevSwitched);
        }, 6000);

        return () => clearInterval(intervalId);
    }, []);


    return (
        <div className='md:sticky md:top-0 scroll-smooth'>
            <div className="flex items-center justify-center h-screen -z-10 overflow-hidden md:h-96 bg-white">
                <figure className="bg-cover bg-profile-pattern h-full w-full absolute md:relative md:w-1/2 flex items-center justify-center">
                    <img className="object-cover h-full w-0 md:mt-8 md:w-1/2" src={naz} alt='Nazarena'></img>
                </figure>
                {switched ? (
                    
                    <Description key="description2" className={switched ? 'fade-left' : ''}>
                        <p className='font-light text-3xl text-primary-700'>Hola! soy</p>
                        <p className='font-semibold text-6xl text-primary-900'>Nazarena Díaz</p>
                        <p className='font-normal text-3xl text-primary-700'>Diseñadora gráfica profesional</p>
                        <span className='justify-center scale-125 md:scale-100 md:justify-start flex space-x-5 py-4 md:py-2'>
                            <a href="https://www.behance.net/nazarenadz" target='__blank'><img src={be}></img></a>
                            <a href="https://www.instagram.com/arcanadigital" target='__blank'><img src={ig}></img></a>
                            <a href='https://www.linkedin.com/in/nazarenadiaz/' target='__blank'><img src={ln}></img></a>
                        </span>
                    </Description>) : 
                (<Description key="description1" className={!switched ? 'fade-left' : ''}>
                        <p className='font-light text-3xl text-primary-700'>Convierto ideas en</p>
                        <p className='font-semibold text-4xl text-primary-900'>Piezas visuales impactantes</p>
                        <p className='font-normal text-3xl text-primary-700'>¡Bienvenidos a mi universo creativo!</p>
                        <div className='w-full flex space-x-3 justify-center md:justify-start py-2'>
                            <Button><Link to="/proyectos">Ver proyectos</Link></Button>
                        </div>
                </Description>
                
                )}

            </div>
            <div className='absolute text-center mx-auto -mt-14 w-full justify-center z-20'>
                 <p className='z-10 w-full text-xl font-medium text-primary-700 justify-center'>¿Te interesan mis diseños?</p>
                 <div className='flex justify-center mt-3'>
                     <Button><Link to="/contacto">CONTACTAME</Link></Button>
                 </div>
             </div>
         
        </div>

    )
}