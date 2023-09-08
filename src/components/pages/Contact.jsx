import Button from '../Button.jsx'
import { motion } from 'framer-motion'
import ContactForm from '../ContactForm.jsx'

export default function Contact() {
    return(
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0, transition: {duration: '0.25s'}}} className="container px-5 py-24 mx-auto">
            <ContactForm />
        </motion.div>
    )
}