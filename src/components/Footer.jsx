import FloatCard from './FloatCard.jsx'

export default function Footer() {
    return (
        <footer className='w-full h-auto bg-primary-900 flex justify-center items-center absolute px-36 py-16'>
            <div className='flex flex-col justify-center items-center'>
                <div className="justify-between md:flex md:flex-row flex-col">
                    <div className="md:justify-start md:w-2/5 md:text-start text-center w-full">
                        <p className="text-5xl font-semibold py-4 text-white">Contáctame</p>
                        <p className="text-xl text-white opacity-75">Elevando tu marca a través de diseños que inspiran y cautivan. Estoy acá para dar vida a tus ideas a través del diseño</p>
                        <span className='justify-center scale-125 md:scale-100 md:justify-start flex space-x-5 py-4 md:py-6'>
                            <a href="https://www.behance.net/nazarenadz" target='__blank'><img src="/be.svg"></img></a>
                            <a href="https://www.instagram.com/designpolux/" target='__blank'><img src="/ig.svg"></img></a>
                            <a href='https://www.linkedin.com/in/nazarenadiaz/' target='__blank'><img src="/lin.svg"></img></a>
                        </span>
                    </div>
                    <div className='flex md:flex-row flex-col md:space-x-12 md:space-y-0 space-y-12 py-4 items-center md:items-start'>
                        <FloatCard image="contact.svg">+54 9 11 6611-7207</FloatCard> 
                        <FloatCard image="mail.svg"><a href="nazarena.diaz@hotmail.com" target="__blank">nazarena.diaz@hotmail.com</a></FloatCard>
                    </div>
                </div>
                <p className='text-white text-lg pt-8 text-center opacity-50'>© 2023 - Todos los derechos reservados</p>
            </div>
        </footer>)
}