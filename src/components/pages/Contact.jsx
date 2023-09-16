import { motion } from 'framer-motion'
import ContactForm from '../ContactForm.jsx'
import { useState } from 'react'

export default function Contact() {
    const [sended, setSended] = useState(false)

    return(
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0, transition: {duration: '0.25s'}}} className="container px-5 py-24 mx-auto">
            {sended ? 

            <div
            className="mb-3 inline-flex w-full items-center justify-center rounded-lg bg-primary-700 text-2xl px-6 py-5 text-secondary-100 fade-left"
            role="alert">
            <span class="mr-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7">
                <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clip-rule="evenodd" />
            </svg>
            </span>
            Tu correo fue enviado! En breve te hablare.
            </div> :

            <ContactForm onsend={setSended} />
            }
        </motion.div>
    )
}