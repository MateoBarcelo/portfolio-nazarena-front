import Button from '../Button.jsx'
import projectService from '../../services/project.js'

export default function CreateProjectForm({ user }) {

    const previewImage = (e) => { 
        const [file] = e.target.files
        if (file) {
            document.getElementById('preview').src = URL.createObjectURL(file)
        }
    }

    const addProject = async (e) => {
        e.preventDefault() //<--- para que no lleve a #

        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)

        const formImage = new FormData()
        formImage.append('file', data.file)

        try {
            const image = await projectService.uploadImage(formImage, user.authToken)
            const imageUrl = image.fileUrl


            const newProject = {
                name: data.projectName,
                year: data.projectYear,
                desc: data.projectDesc,
                img: imageUrl,
                category: data.projectCategory,
                linkto: data.projectLink
            }

            await projectService.create(newProject, user.authToken)
        } catch {
            console.log('Error al crear el proyecto')
        }


        for (let i = 0; i < e.target.length; i++) {
             e.target[i].value = ''
        }

        document.querySelector('#preview').src = ''
        
    }

    return(
        <form onSubmit={addProject} className='flex flex-col justify-center items-center'>
            <div className="lg:w-1/2 w-full h-auto p-8 mx-auto flex flex-col md:flex-row flex-wrap">
                <div className="flex flex-col md:flex-row p-4 w-auto basis-full">
                    <div className="flex flex-col">
                        <label className="leading-7 text-sm text-white">
                            Nombre del proyecto
                        </label>
                        <input
                            type="text"
                            id="projectName"
                            name="projectName"
                            placeholder="Nombre del proyecto"
                            className='rounded-md border-none'
                            />
                    </div>
                    <div className="flex flex-col pl-2">
                        <label className="leading-7 text-sm text-white">
                            Año
                        </label>
                        <input
                            type="text"
                            id="projectYear"
                            name="projectYear"
                            placeholder="2022"
                            className="w-[65px] rounded-md border-none"
                            />
                    </div>
                </div>
                <div className="flex flex-col w-auto p-4 basis-full">
                    <label className="leading-7 text-sm text-white">
                        Descripción
                    </label>
                    <textarea
                        type="text"
                        id="projectDesc"
                        name="projectDesc"
                        placeholder="Descripción del proyecto"
                        className='rounded-md border-none'
                        />
                </div>
                <div className="flex flex-col w-auto p-4 basis-full">
                    <label className="leading-7 text-sm text-white">
                        Miniatura
                    </label>    
                    <div className="flex flex-row h-auto">
                        <label className="p-3 w-1/2 h-[42px] bg-white flex items-center relative rounded-md">                    
                            <input
                                type="file"
                                id="file"
                                name="file"
                                className="hidden"
                                onChange={e => previewImage(e)}/>
                            <p className="text-gray-500">Seleccionar archivo...</p>
                            <img id="preview" className="ml-12 w-1/5 absolute -right-20" src="" alt=""/>  
                        </label>         
                    </div>       
                </div>
                <div className="flex flex-col w-auto p-4 pb-2">
                        <label className="leading-7 text-sm text-white">
                            Categoría
                        </label>
                        <input
                            type="text"
                            id="projectCategory"
                            name="projectCategory"
                            placeholder="Marca, packaging, etc."
                            className='rounded-md border-none'
                            />
                </div>
                <div className="flex flex-col w-auto mb-2 p-4 pb-2">
                        <label className="leading-7 text-sm text-white">
                            Redirección a
                        </label>
                        <input
                            type="text"
                            id="projectLink"
                            name="projectLink"
                            placeholder="https://www.behance.com"
                            className='rounded-md border-none'
                            />
                </div>
                
            </div>
            <Button className={"mb-6"}>Crear proyecto</Button>
        </form>
    
        )

}