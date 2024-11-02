import { useEffect, useState, useRef } from 'react'
import Button from './Button.jsx'
import contactService from '../services/contact.js'

export default function ContactForm({onsend}) {

    const firstInput = useRef(true)

    const [email, setEmail] = useState('')

    const [error, setError] = useState(true)

    const [sended, setSended] = useState(false)

    const errorMessage = "Por favor ingresa un correo válido"

    const handleOnChange = (e) => {

       const newEmail = e.target.value 
       if(email.startsWith(" ")) return
       setEmail(newEmail)
    }

    useEffect(() => {
        if(firstInput.current) {
            firstInput.current = false
            return
        }

        const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if(email.length < 3) {
         setError(true)
         return
     }
 
        if(!email.match(validEmail)) {
         setError(true)
        } else {
         setError(false)    
        }
    },[email])

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        
        const data = Object.fromEntries(new FormData(e.target))

        const newEmail = {
            name: data.name,
            mail: data.email,
            message: data.message
        }

        await contactService.sendMail(newEmail)

        onsend(true)
    }
    

    return(
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col text-center w-full mb-12">
                <h1 className="md:text-4xl text-2xl font-semibold title-font mb-4 text-white">
                Contáctame!
                </h1>
                <p className="sm:text-xl text-lg lg:w-2/3 mx-auto leading-relaxed text-white">
                El primer paso para trabajar juntos y hacer realidad tus sueños.
                </p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                    <div className="relative">
                    <label for="name" className="leading-7 text-sm text-white">
                        Nombre
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder='Juan'
                        className="w-full bg-white rounded border-secondary-90 focus:border-secondary-300 text-base text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    </div>
            </div>
            <div className="p-2 w-1/2">
                <div className="relative">
                    <label className="leading-7 text-sm text-white">
                        Tu correo
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        placeholder='usuario@gmail.com'
                        onChange={handleOnChange}
                        className="w-full bg-white rounded border border-secondary-90 focus:border-secondary-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    {error && <p className="text-red-800 py-2 text-xs italic">{errorMessage}</p>}
                </div>
            </div>
            <div className="p-2 w-full">
                <div className="relative">
                <label
                    for="message"
                    className="leading-7 text-sm text-white"
                >
                    Tu mensaje
                </label>
                <textarea
                    id="message"
                    name="message"
                    className="w-full bg-white rounded border border-secondary-90 focus:border-secondary-300 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
                </div>
            </div>
            <div className="p-2 w-full">
                <Button className={`flex mx-auto ${error ? 'pointer-events-none bg-red-300' : 'pointer-events-auto'}`} type={'submit'}>Enviar</Button>
            </div>
            </div>
        </div>
      </form>
    )
}