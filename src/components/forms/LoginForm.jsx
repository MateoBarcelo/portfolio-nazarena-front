import Button from '../Button.jsx'
import { useState } from 'react'
const LoginForm = ({handleSubmit, handleChangeUser, handleChangePass}) => {

    return (
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col text-center w-full">
                    <h1 className="md:text-4xl text-2xl font-semibold title-font text-white py-12">
                    Bienvenid@!
                    </h1>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex justify-center -m-2">
                    <div className="p-2 w-1/2">
                        <div className="relative">
                        <label for="name" className="leading-7 text-sm text-white">
                            Nombre
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Nombre de usuario"
                            onChange={({target}) => handleChangeUser(target.value)}
                            className="w-full bg-primary-100 rounded border-secondary-90 focus:border-secondary-300 text-base text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                        </div>
                    </div>
                    </div>
                </div>
                <div className="lg:w-1/2 mx-auto">
                    <div className="flex justify-center flex-wrap -m-2">
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label for="password" className="leading-7 text-sm text-white">
                                    Contraseña
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="********"
                                    onChange={({target}) => handleChangePass(target.value)}
                                    className="w-full bg-primary-100 rounded border-secondary-90 focus:border-secondary-300 text-base text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                        </div>
                        <div className="p-8 w-full">
                            <Button className={'flex mx-auto'} type={'submit'}>Entrar</Button>
                        </div>
                    </div>
                </div>
        </form>
    )
}

export default LoginForm