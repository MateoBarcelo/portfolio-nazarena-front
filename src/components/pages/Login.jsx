import { useEffect, useState } from "react"
import Button from '../Button.jsx'
import loginService from '../../services/login.js'
import LoginForm from '../forms/LoginForm.jsx'
import CreateProjectForm from "../forms/CreateProjectForm.jsx"
export default function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [user, setUser] = useState(null)

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedUser')

        if(loggedUserJSON) {
            const loggedUser = JSON.parse(loggedUserJSON)
            setUser(loggedUser)
        }
    },[])

    const handleLogout = () => {
        window.localStorage.removeItem('loggedUser')
        setUser(null)
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        
        try {

            const user = await loginService.login({username, password})

            window.localStorage.setItem('loggedUser', JSON.stringify(user))
            setUser(user)
            setUsername('')
            setPassword('')
        } catch(error) {

        }
        
    }

    return(
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0, transition: {duration: '0.25s'}}}>
            {user === null 
            ? <LoginForm handleSubmit={handleLogin} handleChangeUser={setUsername} handleChangePass={setPassword} />
            : <div>
                <div className="flex justify-center mt-8 items-center">
                    <p className="font-semibold text-white p-2 text-4xl">Crear un proyecto</p>
                    <Button className={"m-4"} onClick={handleLogout}>Salir</Button>
                </div>
                
                <CreateProjectForm user={user} />
            </div>}
        </motion.div>
    )
}