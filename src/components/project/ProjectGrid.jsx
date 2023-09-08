import ProjectCard from './ProjectCard.jsx'

export default function ProjectGrid({projects}) {

    const listProjects = projects.map((project) => {
        return (<ProjectCard key={project.id} project={project} />)  
    })

    return (
            <div className={`w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-4 p-8 py-12`}>
                {listProjects}
            </div>
    )
}